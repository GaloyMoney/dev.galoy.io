#!/bin/bash

# deps
if ! git --version; then sudo apt-get install -y git; fi
if ! node --version; then sudo apt-get install -y nodejs; fi
if ! yarn --version; then sudo apt-get install -y yarn; fi
if ! npx spectaql --version; then yarn add spectaql --non-interactive; fi

mkdir -p .temp
cd .temp || exit 1

# checkout galoy
if [ ! -d "galoy" ]; then
  git clone https://github.com/GaloyMoney/galoy
fi
cd galoy || exit 1

# build public api reference
npx spectaql ./../../scripts/spectaql/spectaql-config-public-api.yml \
  -t ./../../static -f public-api-reference.html || exit 1

# build admin api reference
npx spectaql ./../../scripts/spectaql/spectaql-config-admin-api.yml \
  -t ./../../static -f admin-api-reference.html || exit 1

# set dark mode
sed -i 's/spectaql.min.css/spectaql.dark.css/' ./../../static/public-api-reference.html
sed -i 's/spectaql.min.css/spectaql.dark.css/' ./../../static/admin-api-reference.html
