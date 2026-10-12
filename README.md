# livdue.com

Liv Dues konstnärssajt — statisk, snabb, ingen webshop.

## Struktur

- `site/` — Astro-projektet (det som deployas)
- `inventory/` — skrapat råmaterial från gamla sajterna (gammal.livdue.com + livdue.com), behålls som arkiv

## Vanliga kommandon

```bash
cd site
npm run dev      # lokal utveckling
npm run build    # bygg till site/dist
```

## Lägga till ett nytt verk

1. Lägg bilden i `site/src/assets/verk/<kategori>/<slug>.jpg`
2. Skapa `site/src/content/verk/<kategori>/<slug>.md`:

```markdown
---
title: "Verkets titel"
kategori: senaste
bild: ../../../assets/verk/senaste/slug.jpg
teknik: "Akvarell"
matt: "28 x 20 cm"
ar: "2026"
ordning: 1
utvald: true   # visas på startsidan
---
```

Kategorier: senaste, akvarell, akryl, teckning, foto, skulptur, objekt, portratt, gras, rum, sten
(definieras i `site/src/lib/kategorier.ts`)

## Aktuellt och utställningar (svenska, norska, engelska)

- Utställningarna ligger i `site/src/lib/utstallningar.ts`: fakta, dikt och katalogens sidor i ordning.
- Bilderna ligger i `site/src/assets/utstallningar/<slug>/`.
- Sidor per språk: `/<sv|no|en>/aktuellt/<slug>/`, `.../inbjudan/` (utskrift) och `.../vernissage.ics`. `/<språk>/aktuellt/` skickar vidare till aktuell utställning.
- Startsidans ingång och statusen (kommande, pågående, tidigare) styrs av datumen och byter själv.

## Förhandsvisning

`site/scripts/forhandsvisning.sh` bygger en noindex-version och publicerar den till
https://vemunddue.github.io/livdue-forhandsvisning/ (eget repo, påverkar inte livdue.com).

## Hosting

Statisk sajt på GitHub Pages: `gh-pages`-grenen i det här repot, med egen domän via CNAME.
OBS: mailen (livi@livdue.com) ligger hos one.com — rör inte MX-posterna vid DNS-ändringar.
