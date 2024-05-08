#!/bin/bash

# deps
if ! git --version; then sudo apt-get install -y git; fi
if ! node --version; then sudo apt-get install -y nodejs; fi
if ! yarn --version; then sudo apt-get install -y yarn; fi
if ! npx spectaql --version; then yarn add spectaql --non-interactive; fi

mkdir -p .temp
cd .temp || exit 1

# checkout blink
if [ ! -d "galoy" ]; then
  git clone https://github.com/GaloyMoney/blink
fi
cd blink || exit 1

# build public api reference
npx spectaql ./../../scripts/spectaql/spectaql-config-public-api.yml \
  -t ./../../static -f public-api-reference.html || exit 1

# set dark mode
sed -i 's/spectaql.min.css/spectaql.dark.css/' ./../../static/public-api-reference.html
