---
id: public-api
title: Try our hosted API
slug: /api/hosted-api
---

import { AuthProvider } from '/src/components/apiTutorial/AuthContext';
import PhoneLoginButton from '/src/components/apiTutorial/PhoneLoginButton';
import EmailLoginButton from '/src/components/apiTutorial/EmailLoginButton';
import AuthRequestBtcButton from '/src/components/apiTutorial/AuthRequestBtcButton';
import AuthRequestUsdButton from '/src/components/apiTutorial/AuthRequestUsdButton';

# Galoy public API

:::note
By default the calls are directed to the staging environment by default where the funds are worthless, using the default bitcoin [signet](/deployment/signet).
:::

## Get started
* [Download Blink](/api#download-the-blink-app)
* [Connect to the staging environment](/api#connect-to-the-staging-environment)
* [Set up the email login](http://localhost:3000/api#set-up-the-email-login)

## Email Login

<AuthProvider>

  <EmailLoginButton />

  <div style={{ margin: '40px 0' }}></div>

  ## Authenticated requests
  The following methods require a valid auth token set in the header as a bearer token - `Authorization: Bearer`

  ### Send USD over lightning
  <AuthRequestUsdButton />

  ### Send satoshis over lightning
  <AuthRequestBtcButton />

</AuthProvider>
