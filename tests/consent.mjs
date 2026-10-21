import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { transformSync } from 'esbuild';
import { stripTypeScriptTypes } from 'node:module';
const source = stripTypeScriptTypes(fs.readFileSync(new URL('../client/src/lib/analytics.ts', import.meta.url), 'utf8')).replaceAll('export ', '');
function page(local = new Map(), session = new Map(), failures = {}, runtime = true) {
 const listeners = new Map();
 const state = { loads: 0, reloads: 0, updates: [], events: 0 };
 const store = (data, kind) => ({
  getItem(key) { if (failures[`${kind}Read`]) throw Error('read blocked'); return data.get(key) ?? null; },
  setItem(key, value) { if (failures[`${kind}Write`]) throw Error('write blocked'); data.set(key, value); },
  removeItem(key) { if (failures[`${kind}Write`]) throw Error('remove blocked'); data.delete(key); },
 });
 const sandbox = { Event, Date, localStorage: store(local, 'local'), sessionStorage: store(session, 'session'),
  document: { querySelector: () => state.loads ? {} : null, createElement: () => ({dataset:{}}), head: {appendChild: () => state.loads++} },
  window: {location:{reload:()=>state.reloads++},
   addEventListener:(name,fn)=>{if(!listeners.has(name))listeners.set(name,new Set());listeners.get(name).add(fn)},
   removeEventListener:(name,fn)=>listeners.get(name)?.delete(fn),
   dispatchEvent:event=>{state.events++;for(const fn of [...(listeners.get(event.type)||[])])fn(event)},
  },
 };
 const ctx = vm.createContext(sandbox);
 const run = code => vm.runInContext(code, ctx);
 run(source);
 const grant = () => run('saveConsent({analytics:true,preferences:true})');
 const deny = () => run('saveConsent({analytics:false,preferences:false})');
 const enabled = () => run('readConsent().analytics');
 const refresh = () => run('applyAnalyticsConsent(readConsent().analytics)');
 if(runtime)run('subscribeConsent(value=>applyAnalyticsConsent(value.analytics))');else refresh();
 const original = sandbox.window.gtag;
 if (original) sandbox.window.gtag = (...args) => {state.updates.push(args); original(...args)};
 return { state, grant, deny, enabled, refresh, local, session, failures, run, sandbox, listenerCount:()=>[...listeners.values()].reduce((n,s)=>n+s.size,0), storage: (key="msd-consent",storageArea=sandbox.localStorage)=>sandbox.window.dispatchEvent({type:"storage",key,storageArea}) };
}
const oldGrant = () => new Map([['msd-consent', JSON.stringify({analytics:true,preferences:true})]]);
// Existing readable grant; denial write alone fails. Session veto survives a fresh module/document.
for (const sessionFails of [false, true]) {
 const p = page(oldGrant());
 assert.equal(p.state.loads,1);
 Object.assign(p.failures,{localWrite:true,sessionWrite:sessionFails,sessionRead:sessionFails});
 const result=p.deny();
 assert.equal(result.saved,false);assert.equal(result.scope,sessionFails?'page':'tab');
 assert.equal(p.enabled(),false);assert.equal(p.state.reloads,0);
 assert.ok(p.state.updates.some(x=>x[2]?.analytics_storage==='denied'));
 p.refresh();assert.equal(p.enabled(),false);assert.equal(p.state.loads,1);
 const next=page(p.local,p.session,p.failures);
 assert.equal(next.enabled(),false);assert.equal(next.state.loads,0);
}
// A session write failure does not undermine a successfully persisted local denial.
{
 const p=page(oldGrant(),new Map(),{sessionWrite:true,sessionRead:true});
 assert.equal(p.deny().saved,true);assert.equal(p.enabled(),false);assert.equal(p.state.reloads,0);
 const next=page(p.local,p.session,p.failures);assert.equal(next.enabled(),false);assert.equal(next.state.loads,0);
}
// Loaded GA: allow -> deny -> allow updates the same runtime and never duplicates its loader.
{
 const p=page(oldGrant());assert.equal(p.deny().analytics,false);assert.equal(p.grant().saved,true);
 assert.equal(p.enabled(),true);assert.equal(p.state.loads,1);assert.equal(p.state.reloads,0);
 assert.equal(p.state.updates.at(-1)[2].analytics_storage,'granted');
}
// An unremovable session veto must not be displayed as a successful grant.
{
 const p=page(oldGrant());p.deny();p.failures.sessionWrite=true;
 const result=p.grant();assert.equal(result.saved,false);assert.equal(result.analytics,false);assert.equal(result.scope,'tab');
 assert.equal(p.enabled(),false);assert.equal(p.state.updates.at(-1)[2].analytics_storage,'denied');
 const otherTab=page(p.local,new Map());assert.equal(otherTab.enabled(),false);assert.equal(otherTab.state.loads,0);
 assert.equal(JSON.parse(p.local.get('msd-consent')).analytics,false);
}
// Clearing the session veto first must not lose denial when the local grant then fails.
{
 const p=page(oldGrant(),new Map(),{localWrite:true});p.deny();
 const result=p.grant();assert.equal(result.saved,false);assert.equal(result.analytics,false);assert.equal(result.scope,'tab');
 const refreshed=page(p.local,p.session,p.failures);assert.equal(refreshed.enabled(),false);assert.equal(refreshed.state.loads,0);
}
// Default denial, malformed consent, unavailable reads, and preference gates.
{
 const p=page();assert.equal(p.enabled(),false);assert.equal(p.state.loads,0);
 p.local.set('msd-consent','{bad');assert.equal(p.enabled(),false);
 p.local.set('msd-consent','null');assert.equal(p.enabled(),false);
 p.failures.localRead=true;assert.equal(p.enabled(),false);
 assert.equal(p.run('saveItinerary(["visit"])'),'temporary');
}
{
 const p=page();const r=p.grant();assert.equal(r.saved,true);assert.equal(r.analytics,true);assert.equal(p.state.loads,1);
 assert.equal(p.run('saveItinerary(["visit"])'),'saved');
 assert.equal(p.run('readItinerary()[0]'),'visit');p.deny();assert.equal(p.run('readItinerary().length'),0);
}
console.log('PASS: exact analytics source; existing-grant denial write failure, session failure and refresh scopes, retained-loader regrant, blocked veto removal, defaults and preferences. VM DOM/storage mocks; not browser or Google network execution.');

// Session reads fail closed, including an explicit allow attempt: do not publish a new grant.
{
 const p=page(oldGrant(),new Map(),{sessionRead:true});assert.equal(p.enabled(),false);assert.equal(p.state.loads,0);
 const before=p.local.get('msd-consent');const result=p.grant();
 assert.equal(result.saved,false);assert.equal(result.analytics,false);assert.equal(p.state.loads,0);assert.equal(p.local.get('msd-consent'),before);
}
// Two independently initialized source modules, shared local storage, separate session stores.
{
 const shared=oldGrant();const a=page(shared),b=page(shared);assert.equal(b.state.loads,1);
 a.deny();b.storage();assert.equal(b.enabled(),false);assert.equal(b.state.updates.at(-1)[2].analytics_storage,'denied');
 a.grant();b.storage();assert.equal(b.enabled(),false);assert.equal(b.state.loads,1);
 assert.equal(b.grant().analytics,true);assert.equal(b.state.loads,1);assert.equal(b.state.updates.at(-1)[2].analytics_storage,'granted');
 shared.clear();b.storage(null);assert.equal(b.enabled(),false);assert.equal(b.state.updates.at(-1)[2].analytics_storage,'denied');
}
// Execute the actual React component functions/effects with a small hooks/JSX fixture.
// This verifies wiring, cleanup and rendered props/text; it is not React DOM/browser execution.
function component(file,p,language='en') {
 const values=[],effects=[],cleanups=[];let cursor=0,mounted=false;
 const jsx=(type,props)=>typeof type==='function'?type(props):({type,props});
 const react={useState:initial=>{const i=cursor++;if(!(i in values))values[i]=initial;return[values[i],value=>values[i]=value]},useEffect:fn=>{if(!mounted)effects.push(fn)},createContext:value=>({value}),useContext:c=>c.value};
 const analytics=p.run('({readConsent,saveConsent,subscribeConsent,applyAnalyticsConsent})');
 const cookies={analytics:'Analytics',essential:'Essential',preference:'Preferences',marketing:'Marketing'};
 const shell={default:props=>props.children,useLanguage:()=>({lang:language,t:{cookies}})};
 const context=vm.createContext({module:{exports:{}},exports:{},require:name=>{
  if(name==='react')return react;if(name==='react/jsx-runtime')return{jsx,jsxs:jsx};
  if(name==='@/lib/analytics')return analytics;if(name==='@/components/SiteShell')return shell;
  if(name==='lucide-react')return{ArrowLeft:()=>null,Check:()=>null};if(name==='@/const')return{languagePath:()=>'/'};
  if(name==='@/lib/site-content')return{copy:{en:{nav:{},footerLinks:{}},id:{nav:{},footerLinks:{}}}};throw Error(name);
 }});context.exports=context.module.exports;
 vm.runInContext(transformSync(fs.readFileSync(new URL(file,import.meta.url),'utf8'),{loader:'tsx',format:'cjs',jsx:'automatic'}).code,context);
 const render=()=>{cursor=0;const tree=context.module.exports.default({children:null});if(!mounted){mounted=true;for(const effect of effects)cleanups.push(effect())}return tree};
 return{render,cleanup:()=>cleanups.forEach(fn=>fn?.())};
}
function nodes(tree){if(!tree)return[];if(Array.isArray(tree))return tree.flatMap(nodes);if(typeof tree!=='object')return[tree];return[tree,...nodes(tree.props?.children)]}
for(const language of ['en','id']){
 const shared=oldGrant(),a=page(shared),b=page(shared);
 const ui=component('../client/src/pages/CookiePage.tsx',b,language);ui.render();
 let tree=ui.render();assert.equal(nodes(tree).find(x=>x?.props?.['aria-label']==='Analytics').props['aria-pressed'],true);
 a.deny();b.storage();tree=ui.render();assert.equal(nodes(tree).find(x=>x?.props?.['aria-label']==='Analytics').props['aria-pressed'],false);
 assert.equal(nodes(tree).some(x=>x?.props?.className==='save-confirm'),false);
 assert.ok(nodes(tree).some(x=>typeof x==='string'&&x.includes(language==='en'?'Google Analytics is off':'Google Analytics nonaktif')));
 ui.cleanup();
 const isolated=page(oldGrant(),new Map(),{},false);
 const shell=component('../client/src/components/SiteShell.tsx',isolated,language);shell.render();
 assert.equal(isolated.listenerCount(),2);
 isolated.local.set('msd-consent',JSON.stringify({analytics:false,preferences:false}));isolated.storage();
 assert.equal(isolated.state.updates.at(-1)[2].analytics_storage,'denied');
 shell.cleanup();assert.equal(isolated.listenerCount(),0);
}
console.log('PASS: fail-closed session reads; independent-tab storage events/clear/external grant veto; exact CookiePage/SiteShell effects and ID/EN effective checkbox props/cleanup (hooks + JSX mocks, no React DOM).');
