# Registrační formulář ELT

Stránka obsahuje informace o registračním formuláři ELT a umožňuje uživatelům vyplnit tento formulář. 

Všechna data v aplikaci jsou zpracovaná na klientovi. Aplikace sama nikam data neposílá (pouze vygeneruje vyplněné PDF).

## Struktura

- `src` Obsahuje kód v jazyce JavaScript
- `css` Obsahuje styly stránky
- `fonts` Obsahuje fonty použité ve formuláři a na stránce.
- `dist` Obsahuje zabalený zdrojový kód aplikace v jednom souboru `dist/bundle.min.js`
- `index.html` HTML kód aplikace.

## Kompilace

Pro nasazení aplikace není kompilace nutná. Tento repozitář obsahuje předem vygenerované zdrojové kódy v adresáři `dist`.

Stažení balíčků a kompilace se provádí pomocí nástroje `npm`. 

1. `npm install` stáhne softwarové balíčky potřebné pro kompilaci a běh aplikace.
2. `npm run build` zkompiluje zdrojový kód aplikace pomocí nástroje babel (kvůli kompatibilitě se staršími prohlížeči)
3. `npm run minify` minifikuje zdrojový kód aplikace (vytvoří `dist/bundle.min.js`)

