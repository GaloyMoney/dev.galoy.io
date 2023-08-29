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

* Find the staging API endpoint and GraphQL playground at:

    https://api.staging.galoy.io/graphql

## Galoy API Tutorial

### Overview

The staging API endpoint is: `https://api.staging.galoy.io/graphql`

### Authentication

To get a new auth token:

## Email Login

<AuthProvider>
  <EmailLoginButton />

  <div style={{ margin: '40px 0' }}></div>

  ## Make authenticated requests
  The following methods require a valid auth token set in the header as a bearer token - `Authorization: Bearer`

  <AuthRequestButton />
</AuthProvider>


#### lnInvoiceFeeProbe <a href="#lninvoicefeeprobe" id="lninvoicefeeprobe"></a>

**query**

```
export PAYMENT_REQUEST='lntb123450n1pscxulepp59x872uskmr0a4r3wnr3vkmr297zm53smw8j4efevpknuwm8vs5yqdq5w35hqurfdenjq6nsdamscqzpuxqyz5vqsp5yzmznk5z7xszkgfk5xstuh8j5gg4srerelv58pph5wjan2kd8rqs9qyyssqe5l376x893374kqsr5lc8tesudg4jryaqlzmx44mfr87nds83margfa09ggd92sy0rudl6r79sat4rxqml5yfdhmm7yk9jc0ugzw7hgpdfxfzk'
curl --location --request POST $URI --header "$AUTH_TOKEN" --header 'Content-Type: application/json' --data-raw '{"query":"mutation lnInvoiceFeeProbe ($input: LnInvoiceFeeProbeInput!) {\n    lnInvoiceFeeProbe (input: $input) {\n        errors {\n            message\n            path\n        }\n        amount\n    }\n}","variables":{"input":{"paymentRequest":"'"$PAYMENT_REQUEST"'"}}}'
```

**response**

```
{
    "data": {
        "lnInvoiceFeeProbe": {
            "errors": [],
            "amount": 0
        }
    }
}
```

#### lnInvoicePaymentSend <a href="#lninvoicepaymentsend" id="lninvoicepaymentsend"></a>

**query**

```
PAYMENT_REQUEST='lntb50u1psc8xeppp5yryt4j8ve0pvyunrp3dr0l5tj0ss4hnkuxz52hldc9nz2njpe2fqdqqxqrrss9qy9qsqsp5xduj0a8u2c7mn959045wnu8xrv63vqye2d2zw3kllahdv47np6qsrzjqwfn3p9278ttzzpe0e00uhyxhned3j5d9acqak5emwfpflp8z2cng85uzyqqqdsqqqqqqqlgqqqqqeqqjqjwcuu47akd6qggafxy403zk9f67xh86huv6r0fkngvkuwrxuadv8dd3u5gfeurshh3q6jr5jvu05z7f63xz5ac8v4pk3tjfv46jt5dcprr9d4z'
curl --location --request POST $URI --header "$AUTH_TOKEN" --header 'Content-Type: application/json' --data-raw '{"query":"mutation lnInvoicePaymentSend ($input: LnInvoicePaymentInput!) {\n    lnInvoicePaymentSend (input: $input) {\n        errors {\n            message\n            path\n        }\n        status\n    }\n}","variables":{"input":{"paymentRequest":"'"$PAYMENT_REQUEST"'","memo":"'"$MEMO"'"}}}'
```

**response**

```
{
    "data": {
        "lnInvoicePaymentSend": {
            "errors": [],
            "status": "ALREADY_PAID"
        }
    }
}
```

## [Postman collection](https://github.com/GaloyMoney/galoy/tree/main/docs/postman-collection)
If you use Postman, we have a collection you can import to test the API.

Download it here: [Lightning Integration.postman\_collection.json](https://github.com/GaloyMoney/galoy/blob/main/docs/postman-collection/galoy_graphql_main_api.postman_collection.json)

## [Hoppscotch.io collection](https://hoppscotch.io/graphql)
* connect to the staging environment: https://api.staging.galoy.io/graphql
* import the collection from a [file](/hoppscotch-collection.json) or [gist](https://gist.githubusercontent.com/openoms/e365104e5b459bd6cead7df0e5c24ff3/raw/fa671f639649accd72304381d0679be610a1b377/hoppscotch-collections.json)

## Videos
### Using the Galoy GraphQL API
Arvin demoes the Galoy GraphQL API on 2022-Oct-26.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RRdpKnFe8qQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Getting started with the Galoy API
Arvin walks through how to use the Galoy API to send USD over Lightning on 2022-Mar-29.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bp5Dc6Wvnbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
