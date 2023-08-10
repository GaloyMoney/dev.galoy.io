# Galoy Dev Docs

* This is the source code for the Galoy Dev Docs website, available at https://dev.galoy.io
* Built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
* The deployed version is in the `gh-pages` branch.

## Local development
### Installation
* requires:
    * git
    * nodejs
    * yarn
* download the repo and install the dependencies:
```
git clone https://github.com/GaloyMoney/dev.galoy.io
cd dev.galoy.io
yarn
```
### Start the local development server
```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Deploy changes

When done editing the docs open a pull request.
* The GitHub Action configured to run when the PR is opened will check for errors.
* Once the PR is merged the changes will be automatically deployed to the `gh-pages` branch and will be available at https://dev.galoy.io
