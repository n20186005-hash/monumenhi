export const SITE_NAME={id:"Monumen Selamat Datang Jakarta — Panduan Wisata",en:"Selamat Datang Monument Jakarta — Visitor Guide"} as const;
export const withSiteName=(title:string,lang:"id"|"en")=>`${title} | ${SITE_NAME[lang]}`;
export const languagePath=(lang:"id"|"en",page="")=>`${lang==="en"?"/en":""}/${page}${page?"/":""}`;
