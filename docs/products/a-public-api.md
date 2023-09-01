---
id: public-api
title: Public API
slug: /products/public-api
---

import { AuthProvider } from '/src/components/graphql/AuthContext';
import PhoneLoginButton from '/src/components/graphql/PhoneLoginButton';
import EmailLoginButton from '/src/components/graphql/EmailLoginButton';
import AuthRequestButton from '/src/components/graphql/AuthRequestButton';

# Public API

:::note
The calls are directed to the staging environment by default where the funds are worthless, using the default bitcoin [signet](/signet.md).
:::

* Find the staging API endpoint and GraphQL playground at:

    https://api.staging.galoy.io/graphql

## Get started
* [Download Blink](/products#download-the-blink-app)
* [Connect to the staging environment](/products#connect-to-the-staging-environment)
* [Set up the email login](http://localhost:3000/products#set-up-the-email-login)

## Email Login

<AuthProvider>
  <EmailLoginButton />

  <div style={{ margin: '40px 0' }}></div>

  ## Authenticated requests
  The following methods require a valid auth token set in the header as a bearer token - `Authorization: Bearer`

  <AuthRequestButton />
</AuthProvider>

## [Postman collection](https://github.com/GaloyMoney/galoy/tree/main/docs/postman-collection)

* Download Postman: [www.postman.com](https://www.postman.com/) or use the web version: [web.postman.co](https://web.postman.co/)
* Download or import the collection: [galoy_graphql_main_api.postman_collection.json](https://github.com/GaloyMoney/galoy/blob/main/docs/postman-collection/galoy_graphql_main_api.postman_collection.json)
* Get the Staging Environment variables: [galoy-staging.postman_environment.json](https://raw.githubusercontent.com/GaloyMoney/galoy/main/docs/postman-collection/galoy-staging.postman_environment.json)

## Videos
### Using the Galoy GraphQL API
Arvin demoes the Galoy GraphQL API on 2022-Oct-26.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RRdpKnFe8qQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Getting started with the Galoy API
Arvin walks through how to use the Galoy API to send USD over Lightning on 2022-Mar-29.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bp5Dc6Wvnbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>