---
id: auth
title: Get an authentication token
slug: /api/auth
---

import { AuthProvider } from '/src/components/apiTutorial/AuthContext';
import PhoneLoginButton from '/src/components/apiTutorial/PhoneLoginButton';
import EmailLoginButton from '/src/components/apiTutorial/EmailLoginButton';
import AuthRequestBtcButton from '/src/components/apiTutorial/AuthRequestBtcButton';
import AuthRequestUsdButton from '/src/components/apiTutorial/AuthRequestUsdButton';

## Get an authentication token for the API from the app

* `Create new account`, `Start with trial account` or `Log back in with Phone or Email`
* tap the menu on the top right and scroll down
* select the build number on the bottom 3 times
* select `Copy access token` to save the token to your clipboard

## Email Login

<AuthProvider>

  <EmailLoginButton />

  <div style={{ margin: '40px 0' }}></div>

</AuthProvider>
