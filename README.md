# Monumen Selamat Datang — delivery notes

This package contains an independent, non-profit public-information site about Monumen Selamat Datang (Bundaran HI), Jakarta Pusat. Indonesian is the default language and English is available from the language control in the header.

## Included experience

The site contains landmark context, practical arrival guidance, neutral information about nearby needs, an embedded Indonesian-language Google Map, FAQ content, locally stored field-list functionality, standalone privacy/terms/cookie pages, and JSON-LD for `TouristAttraction` and `FAQPage`.

Google Analytics 4 is configured with measurement ID `G-HXM22WWPKP`. It is not requested until a visitor explicitly enables analytics in the Cookie Settings page. The visitor’s language, cookie preferences, and field-list items remain in browser `localStorage` on the current device.

## Quality checks run

`pnpm check` and `pnpm build` pass from the project root. The production output was scanned for `example.com` and `chrome-extension://`; neither is present. A `localhost` fragment remains inside a bundled development-environment guard supplied by the runtime dependency, rather than in a public URL or site setting.

## Image credits

The page uses two genuine photos from Wikimedia Commons, retained under **CC BY-SA 4.0**. The photo credits and source links appear in the page’s source notes.

| Photo | Credit | Licence | Source |
| --- | --- | --- | --- |
| Jakarta Bundaran HI | Adisurahman | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Jakarta_Bundaran_HI_.jpg |
| Bundaran HI per August 2023 | Baqotun0023 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Bundaran_HI_per_August_2023.jpg |

## Suggested domains

These are naming candidates that follow local Indonesian convention and should be checked with a registrar immediately before purchase: `monumenselamatdatang.id`, `panduanbundaranhi.id`, `bundaranhi.info`, and `jakartaputaran.id`.

An RDAP query returned an existing record for `panduanbundaranhi.id`; do not register it without checking a registrar for transfer/status information. Other RDAP lookups timed out from the build environment, so their availability could not be confirmed conclusively.
