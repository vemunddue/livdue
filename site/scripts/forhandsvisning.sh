#!/usr/bin/env bash
# Bygger och publicerar förhandsvisningen till
# https://vemunddue.github.io/livdue-forhandsvisning/ (noindex).
# Rör INTE den riktiga sajten: CNAME tas bort så att förhandsvisningen
# aldrig kan ta över livdue.com.
set -euo pipefail
cd "$(dirname "$0")/.."
UT="$(mktemp -d)/forhandsvisning"
PUBLIC_FORHANDSVISNING=1 npx astro build --outDir "$UT"
cd "$UT"
rm -rf CNAME collections content-assets.mjs content-modules.mjs data-store.json settings.json
touch .nojekyll
printf 'User-agent: *\nDisallow: /\n' > robots.txt
git init -q -b main
git add -A
git commit -qm "Förhandsvisning $(date '+%Y-%m-%d %H:%M')"
git push -q -f https://github.com/vemunddue/livdue-forhandsvisning.git main
echo "Klart: https://vemunddue.github.io/livdue-forhandsvisning/sv/aktuellt/friktion/"
