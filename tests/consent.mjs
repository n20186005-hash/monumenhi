import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { stripTypeScriptTypes } from 'node:module';
const source = stripTypeScriptTypes(fs.readFileSync(new URL('../client/src/lib/analytics.ts', import.meta.url), 'utf8')).replaceAll('export ', '');
function page(local = new Map(), session = new Map(), failures = {}) {
 const state = { loads: 0, reloads: 0, updates: [], events: 0 };
 const store = (data, kind) => ({
  getItem(key) { if (failures[`${kind}Read`]) throw Error('read blocked'); return data.get(key) ?? null; },
  setItem(key, value) { if (failures[`${kind}Write`]) throw Error('write blocked'); data.set(key, value); },
  removeItem(key) { if (failures[`${kind}Write`]) throw Error('remove blocked'); data.delete(key); },
 });
 const sandbox = { Event, Date, localStorage: store(local, 'local'), sessionStorage: store(session, 'session'),
  document: { querySelector: () => state.loads ? {} : null, createElement: () => ({dataset:{}}), head: {appendChild: () => state.loads++} },
  window: {location:{reload:()=>state.reloads++},dispatchEvent:()=>{state.events++;run('applyAnalyticsConsent(readConsent().analytics)')}},
 };
 const ctx = vm.createContext(sandbox);
 const run = code => vm.runInContext(code, ctx);
 run(source);
 const grant = () => run('saveConsent({analytics:true,preferences:true})');
 const deny = () => run('saveConsent({analytics:false,preferences:false})');
 const enabled = () => run('readConsent().analytics');
 const refresh = () => run('applyAnalyticsConsent(readConsent().analytics)');
 refresh();
 const original = sandbox.window.gtag;
 if (original) sandbox.window.gtag = (...args) => {state.updates.push(args); original(...args)};
 return { state, grant, deny, enabled, refresh, local, session, failures, run, sandbox };
}
const oldGrant = () => new Map([['msd-consent', JSON.stringify({analytics:true,preferences:true})]]);
// Existing readable grant; denial write alone fails. Session veto survives a fresh module/document.
for (const sessionFails of [false, true]) {
 const p = page(oldGrant(), new Map(), {localWrite:true, sessionWrite:sessionFails, sessionRead:sessionFails});
 assert.equal(p.state.loads,1);
 const result=p.deny();
 assert.equal(result.saved,false);assert.equal(result.scope,sessionFails?'page':'tab');
 assert.equal(p.enabled(),false);assert.equal(p.state.reloads,0);
 assert.ok(p.state.updates.some(x=>x[2]?.analytics_storage==='denied'));
 p.refresh();assert.equal(p.enabled(),false);assert.equal(p.state.loads,1);
 const next=page(p.local,p.session,p.failures);
 assert.equal(next.enabled(),sessionFails);assert.equal(next.state.loads,sessionFails?1:0);
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
