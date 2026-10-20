# Monumen Selamat Datang / Bundaran HI guide

Independent Indonesian and English visitor information. React/Vite builds eight directly readable static pages: one guide and three policy pages per language, with matching language links, unique text metadata, canonical URLs, sitemap and separate noindex404.

```sh
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

`server/worker.ts` runs before ASSETS on the verified `monumenhi` Cloudflare Worker. HTTP/www requests redirect to HTTPS apex with the path and query preserved. Unknown URLs retain status404 and a noindex header. `dist/public` is the asset output; `dist/index.js` is only an optional local Express server. Production deployment and CUA browser acceptance remain separate coordinator steps.

Language follows the URL. Consent storage is guarded and Google Analytics loads only after explicit opt-in. Withdrawal reloads an active analytics page. Persistent field lists require optional preferences; otherwise lists are temporary. Malformed or unavailable storage is handled without crashing, and failed saves are reported. There are no accounts, booking systems, contact forms or email submission channels. Google Maps and Google Fonts are disclosed third-party resources.

See [public evidence](PUBLIC_SOURCES.md) and [asset provenance](ASSET_SOURCES.md). Traffic-island access, nearby services, transport entrances, viewing decks, fees and events require separate confirmation. Original decorative working assets are archived outside public output; no photographic authenticity or new licence is inferred for them.

Build output is ignored by default. Explicitly include complete generated output when committing a deployment snapshot and verify new hashes, sitemap, robots and 404 in the committed tree.
