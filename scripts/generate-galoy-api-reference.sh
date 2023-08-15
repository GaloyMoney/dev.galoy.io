#!/bin/bash

# deps
if ! git --version; then sudo apt-get install -y git; fi
if ! node --version; then sudo apt-get install -y nodejs; fi
if ! yarn --version; then sudo apt-get install -y yarn; fi
if ! npx spectaql --version; then yarn add spectaql; fi

mkdir .temp
cd .temp || exit 1

# checkout galoy
git clone https://github.com/GaloyMoney/galoy
cd galoy || exit 1

# install deps
#yarn install --frozen-lockfile

# build public api reference
npx spectaql ./../../scripts/spectaql/spectaql-config-public-api.yml -1 \
    -t ./../../static -f public-api-reference.html

# build admin api reference
npx spectaql ./../../scripts/spectaql/spectaql-config-admin-api.yml -1 \
    -t ./../../static -f admin-api-reference.html
