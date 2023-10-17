---
id: api
title: API
slug: /products/api
---

## Hosted API
To try the hosted instance of our API visit the [Blink Developer Documentation](https://dev.blink.sv/api)<br />
There you can find:
* an interactive tutorials to get started with the API
* the endpoints to use for mainnet and signet bitcoin
* a Postman collection and environment variables
* generated GraphQL queries in multiple programming languages
* API reference documentation

## Local `dev` API access
For the local `dev` environment
* clone the [galoy repo](https://github.com/GaloyMoney/galoy) and install the dependencies as in [github.com/GaloyMoney/galoy/blob/main/DEV.md#setup](https://github.com/GaloyMoney/galoy/blob/main/DEV.md#setup)
* use the following commands to start hosting the API locally:
  ```
  $ TEST="01|02" make reset-integration
  $ make start-main
  ```
* You can then use the mutations in the `login flow` folder to login as one of the test accounts defined in the `default.yaml` file (one is already auto-populated).

Find more details about hosting the Galoy satck yourself in the [deployment section](/deployment/).


## Admin API

### [Galoy admin API reference](https://dev.galoy.io/admin-api-reference.html)
### Preformed GraphQL queries
* [galoy/tree/main/core/api/test/bats/admin-gql](https://github.com/GaloyMoney/galoy/tree/main/core/api/test/bats/admin-gql)