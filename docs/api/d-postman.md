---
id: postman
title: Postman collection
slug: /api/postman
---
## Online docs
For the queries applied in multiple languages visit the Galoy API Postman collection documentation at:
[documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd](https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd)

## Local development

We've included the following files here that can be imported into Postman to get up-and-running with the Galoy API.

### Collection

* [galoy_graphql_main_api.postman_collection.json](https://dev.galoy.io/galoy_graphql_main_api.postman_collection.json): the collection of queries and mutations

### Environment variables

* [galoy-dev.postman_environment.json](https://dev.galoy.io/galoy-dev.postman_environment.json): environment variables to hit our testing local setup
* [galoy-staging.postman_environment.json](https://dev.galoy.io/galoy-staging.postman_environment.json): environment variables to hit our deployed staging with signet bitcoin
* [galoy-mainnet.postman_environment.json](https://dev.galoy.io/galoy-mainnet.postman_environment.json): environment variables to hit our deployed Blink production environment with mainnet bitcoin

### Usage

* Download Postman: [www.postman.com](https://www.postman.com/) or use the web version: [web.postman.co](https://web.postman.co/)
* Import the collection and the respective environment variable files into Postman.

### Local `dev` API access
For the local `dev` environment
* clone the [galoy repo](https://github.com/GaloyMoney/galoy) and install the dependencies as in [github.com/GaloyMoney/galoy/blob/main/DEV.md#setup](https://github.com/GaloyMoney/galoy/blob/main/DEV.md#setup)
* use the following commands to start hosting the API locally:
  ```
  $ TEST="01|02" make reset-integration
  $ make start-main
  ```
* You can then use the mutations in the `login flow` folder to login as one of the test accounts defined in the `default.yaml` file (one is already auto-populated).

### `staging` and `mainnet` API access

Follow the links to register and get an auth token:
* [Start with Blink](/api)
* [Get an auth token](/api/auth)
