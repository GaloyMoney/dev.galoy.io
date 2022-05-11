# Core API Reference

**API Endpoints**

```
https://api.staging.galoy.io/graphql
```

### Galoy API Tutorial

### Lightning Integration <a href="#lightning-integration" id="lightning-integration"></a>

### Overview <a href="#overview" id="overview"></a>

The staging API endpoint is: `https://api.staging.galoy.io/graphql`

### Authentication <a href="#authentication" id="authentication"></a>

To get a new JWT:

1. Use `userRequestAuthCode` to receive an auth code via SMS
2. Call `userLogin` using the same phone number and auth code

All other methods require a valid JWT set in the header as a bearer token - `Authorization: Bearer`

### Curl requests <a href="#curl-requests" id="curl-requests"></a>

#### userRequestAuthCode <a href="#userrequestauthcode" id="userrequestauthcode"></a>

**query**

```
export URI=https://api.staging.galoy.io/graphql
export PHONE='+12025550148'
curl --location --request POST $URI --header 'Content-Type: application/json' --data-raw '{"query":"mutation userRequestAuthCode ($input: UserRequestAuthCodeInput!) {\n    userRequestAuthCode (input: $input) {\n        errors {\n            message\n            path\n        }\n        success\n    }\n}","variables":{"input":{"phone":"'"$PHONE"'"}}}'
```

**response**

```
{
    "data": {
        "userRequestAuthCode": {
            "errors": [],
            "success": true
        }
    }
}
```

#### userLogin <a href="#userlogin" id="userlogin"></a>

**query**

```
export CODE='012345'
curl --location --request POST $URI --header 'Content-Type: application/json' --data-raw '{"query":"mutation userLogin ($input: UserLoginInput!) {\n    userLogin (input: $input) {\n        errors {\n            message\n            path\n        }\n        authToken\n    }\n}","variables":{"input":{"phone":"'"$PHONE"'","code":"'"$CODE"'"}}}'
```

**response**

```
{
    "data": {
        "userLogin": {
            "errors": [],
            "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZjkwMTY3ODM2MmZmNjIzMjVkZmFmYjciLCJuZXR3b3JrIjoicmVndGVzdCIsImN1cnJlbmN5IjoiQlRDIiwiaWF0IjoxNjAzMjc4NDU2fQ.-im7fJS_andM32zNXDVqSDPPoQtCtCE22X-hUclT3u0"
        }
    }
}
```

#### lnInvoiceCreate <a href="#lninvoicecreate" id="lninvoicecreate"></a>

**query**

```
export AUTH_TOKEN='Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZjkwMTY3ODM2MmZmNjIzMjVkZmFmYjciLCJuZXR3b3JrIjoicmVndGVzdCIsImN1cnJlbmN5IjoiQlRDIiwiaWF0IjoxNjAzMjc4NDU2fQ.-im7fJS_andM32zNXDVqSDPPoQtCtCE22X-hUclT3u0'
export AMOUNT=12345
export MEMO='tipping'
curl --location --request POST $URI --header "$AUTH_TOKEN" --header 'Content-Type: application/json' --data-raw '{"query":"mutation lnInvoiceCreate ($input: LnInvoiceCreateInput!) {\n    lnInvoiceCreate (input: $input) {\n        errors {\n            message\n            path\n        }\n        invoice {\n            paymentRequest\n            paymentHash\n            paymentSecret\n            satoshis\n        }\n    }\n}","variables":{"input":{"amount":"'"$AMOUNT"'","memo":"'"$MEMO"'"}}}'
```

**response**

```
{
    "data": {
        "lnInvoiceCreate": {
            "errors": [],
            "invoice": {
                "paymentRequest": "lntb123450n1pscxulepp59x872uskmr0a4r3wnr3vkmr297zm53smw8j4efevpknuwm8vs5yqdq5w35hqurfdenjq6nsdamscqzpuxqyz5vqsp5yzmznk5z7xszkgfk5xstuh8j5gg4srerelv58pph5wjan2kd8rqs9qyyssqe5l376x893374kqsr5lc8tesudg4jryaqlzmx44mfr87nds83margfa09ggd92sy0rudl6r79sat4rxqml5yfdhmm7yk9jc0ugzw7hgpdfxfzk",
                "paymentHash": "298be57216d8dfda8e2e88e2cb6c6a2f85ba461b71e55ca72c0da7c76cec8508",
                "paymentSecret": "20b629da82f1a02b2136a1a0be5cf2a211580f23cfd8438437a3a5d9aacd38c1",
                "satoshis": 12345
            }
        }
    }
}
```

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

If you use Postman, we have a collection you can import to test the API.

Download it here: [Lightning Integration.postman\_collection.json](https://github.com/GaloyMoney/galoy/tree/main/src/graphql/main/docs/Lightning-Integration.postman\_collection.json)

### Queries <a href="#group-operations-queries" id="group-operations-queries"></a>

### `accountDefaultWallet`

**Response**

Returns a [`PublicWallet!`](broken-reference)

**Arguments**

| Name                                                    | Description |
| ------------------------------------------------------- | ----------- |
| `username` - [`Username!`](broken-reference)            |             |
| `walletCurrency` - [`WalletCurrency`](broken-reference) |             |

**Example**

**Query**

```
query accountDefaultWallet(
  $username: Username!,
  $walletCurrency: WalletCurrency
) {
  accountDefaultWallet(
    username: $username,
    walletCurrency: $walletCurrency
  ) {
    id
    walletCurrency
  }
}
```

**Variables**

```
{"username": Username, "walletCurrency": "BTC"}
```

**Response**

```
{"data": {"accountDefaultWallet": {"id": 4, "walletCurrency": "BTC"}}}
```

### `btcPrice`

**Example**

**Query**

```
query btcPrice {
  btcPrice {
    base
    currencyUnit
    formattedAmount
    offset
  }
}
```

**Response**

```
{
  "data": {
    "btcPrice": {
      "base": 9007199254740991,
      "currencyUnit": "BTCSAT",
      "formattedAmount": "xyz789",
      "offset": 123
    }
  }
}
```

### `btcPriceList`

**Response**

Returns [`[PricePoint]`](broken-reference)

**Arguments**

| Name                                             | Description |
| ------------------------------------------------ | ----------- |
| `range` - [`PriceGraphRange!`](broken-reference) |             |

**Example**

**Query**

```
query btcPriceList($range: PriceGraphRange!) {
  btcPriceList(range: $range) {
    price {
      ...PriceFragment
    }
    timestamp
  }
}
```

**Variables**

```
{"range": "FIVE_YEARS"}
```

**Response**

```
{
  "data": {
    "btcPriceList": {
      "price": Price,
      "timestamp": 1592577642
    }
  }
}
```

### `businessMapMarkers`

**Response**

Returns [`[MapMarker]`](broken-reference)

**Example**

**Query**

```
query businessMapMarkers {
  businessMapMarkers {
    mapInfo {
      ...MapInfoFragment
    }
    username
  }
}
```

**Response**

```
{
  "data": {
    "businessMapMarkers": {
      "mapInfo": MapInfo,
      "username": Username
    }
  }
}
```

### `globals`

**Response**

Returns a [`Globals`](broken-reference)

**Example**

**Query**

```
query globals {
  globals {
    buildInformation {
      ...BuildInformationFragment
    }
    nodesIds
  }
}
```

**Response**

```
{
  "data": {
    "globals": {
      "buildInformation": BuildInformation,
      "nodesIds": ["abc123"]
    }
  }
}
```

### `me`

**Example**

**Query**

```
query me {
  me {
    contactByUsername {
      ...UserContactFragment
    }
    contacts {
      ...UserContactFragment
    }
    createdAt
    defaultAccount {
      ...AccountFragment
    }
    id
    language
    phone
    quizQuestions {
      ...UserQuizQuestionFragment
    }
    twoFAEnabled
    username
  }
}
```

**Response**

```
{
  "data": {
    "me": {
      "contactByUsername": UserContact,
      "contacts": [UserContact],
      "createdAt": 1592577642,
      "defaultAccount": Account,
      "id": 4,
      "language": Language,
      "phone": Phone,
      "quizQuestions": [UserQuizQuestion],
      "twoFAEnabled": false,
      "username": Username
    }
  }
}
```

### `mobileVersions`

**Response**

Returns [`[MobileVersions]`](broken-reference)

**Example**

**Query**

```
query mobileVersions {
  mobileVersions {
    currentSupported
    minSupported
    platform
  }
}
```

**Response**

```
{
  "data": {
    "mobileVersions": {
      "currentSupported": 987,
      "minSupported": 123,
      "platform": "abc123"
    }
  }
}
```

### `onChainTxFee`

**Response**

Returns an [`OnChainTxFee!`](broken-reference)

**Arguments**

| Name                                                              | Description   |
| ----------------------------------------------------------------- | ------------- |
| `address` - [`OnChainAddress!`](broken-reference)                 |               |
| `amount` - [`SatAmount!`](broken-reference)                       |               |
| `targetConfirmations` - [`TargetConfirmations`](broken-reference) | Default = `1` |
| `walletId` - [`WalletId!`](broken-reference)                      |               |

**Example**

**Query**

```
query onChainTxFee(
  $address: OnChainAddress!,
  $amount: SatAmount!,
  $targetConfirmations: TargetConfirmations,
  $walletId: WalletId!
) {
  onChainTxFee(
    address: $address,
    amount: $amount,
    targetConfirmations: $targetConfirmations,
    walletId: $walletId
  ) {
    amount
    targetConfirmations
  }
}
```

**Variables**

```
{
  "address": OnChainAddress,
  "amount": SatAmount,
  "targetConfirmations": 1,
  "walletId": WalletId
}
```

**Response**

```
{
  "data": {
    "onChainTxFee": {
      "amount": SatAmount,
      "targetConfirmations": TargetConfirmations
    }
  }
}
```

### `quizQuestions`

**Response**

Returns [`[QuizQuestion]`](broken-reference)

**Example**

**Query**

```
query quizQuestions {
  quizQuestions {
    earnAmount
    id
  }
}
```

**Response**

```
{
  "data": {
    "quizQuestions": {
      "earnAmount": SatAmount,
      "id": "4"
    }
  }
}
```

### `userDefaultWalletId`

will be migrated to AccountDefaultWalletId

**Response**

Returns a [`WalletId!`](broken-reference)

**Arguments**

| Name                                         | Description |
| -------------------------------------------- | ----------- |
| `username` - [`Username!`](broken-reference) |             |

**Example**

**Query**

```
query userDefaultWalletId($username: Username!) {
  userDefaultWalletId(username: $username)
}
```

**Variables**

```
{"username": Username}
```

**Response**

```
{"data": {"userDefaultWalletId": WalletId}}
```

### `usernameAvailable`

**Response**

Returns a [`Boolean`](broken-reference)

**Arguments**

| Name                                         | Description |
| -------------------------------------------- | ----------- |
| `username` - [`Username!`](broken-reference) |             |

**Example**

**Query**

```
query usernameAvailable($username: Username!) {
  usernameAvailable(username: $username)
}
```

**Variables**

```
{"username": Username}
```

**Response**

```
{"data": {"usernameAvailable": false}}
```

### Mutations <a href="#group-operations-mutations" id="group-operations-mutations"></a>

### `accountUpdateDefaultWalletId`

**Response**

Returns an [`AccountUpdateDefaultWalletIdPayload!`](broken-reference)

**Arguments**

| Name                                                               | Description |
| ------------------------------------------------------------------ | ----------- |
| `input` - [`AccountUpdateDefaultWalletIdInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation accountUpdateDefaultWalletId($input: AccountUpdateDefaultWalletIdInput!) {
  accountUpdateDefaultWalletId(input: $input) {
    account {
      ...ConsumerAccountFragment
    }
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": AccountUpdateDefaultWalletIdInput}
```

**Response**

```
{
  "data": {
    "accountUpdateDefaultWalletId": {
      "account": ConsumerAccount,
      "errors": [Error]
    }
  }
}
```

### `captchaCreateChallenge`

**Response**

Returns a [`CaptchaCreateChallengePayload!`](broken-reference)

**Example**

**Query**

```
mutation captchaCreateChallenge {
  captchaCreateChallenge {
    errors {
      ...ErrorFragment
    }
    result {
      ...CaptchaCreateChallengeResultFragment
    }
  }
}
```

**Response**

```
{
  "data": {
    "captchaCreateChallenge": {
      "errors": [Error],
      "result": CaptchaCreateChallengeResult
    }
  }
}
```

### `captchaRequestAuthCode`

**Response**

Returns a [`SuccessPayload!`](broken-reference)

**Arguments**

| Name                                                         | Description |
| ------------------------------------------------------------ | ----------- |
| `input` - [`CaptchaRequestAuthCodeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation captchaRequestAuthCode($input: CaptchaRequestAuthCodeInput!) {
  captchaRequestAuthCode(input: $input) {
    errors {
      ...ErrorFragment
    }
    success
  }
}
```

**Variables**

```
{"input": CaptchaRequestAuthCodeInput}
```

**Response**

```
{
  "data": {
    "captchaRequestAuthCode": {
      "errors": [Error],
      "success": false
    }
  }
}
```

### `deviceNotificationTokenCreate`

**Response**

Returns a [`SuccessPayload!`](broken-reference)

**Arguments**

| Name                                                                | Description |
| ------------------------------------------------------------------- | ----------- |
| `input` - [`DeviceNotificationTokenCreateInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation deviceNotificationTokenCreate($input: DeviceNotificationTokenCreateInput!) {
  deviceNotificationTokenCreate(input: $input) {
    errors {
      ...ErrorFragment
    }
    success
  }
}
```

**Variables**

```
{"input": DeviceNotificationTokenCreateInput}
```

**Response**

```
{
  "data": {
    "deviceNotificationTokenCreate": {
      "errors": [Error],
      "success": true
    }
  }
}
```

### `intraLedgerPaymentSend`

**Description**

Actions a payment which is internal to the ledger e.g. it does not use onchain/lightning. Does not currently support payments to or from USD wallets. Returns payment status (success, failed, pending, already\_paid).

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                         | Description |
| ------------------------------------------------------------ | ----------- |
| `input` - [`IntraLedgerPaymentSendInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation intraLedgerPaymentSend($input: IntraLedgerPaymentSendInput!) {
  intraLedgerPaymentSend(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": IntraLedgerPaymentSendInput}
```

**Response**

```
{
  "data": {
    "intraLedgerPaymentSend": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `lnInvoiceCreate`

**Description**

Returns a lightning invoice for an associated wallet. When invoice is paid the value will be credited to a BTC wallet. Expires after 24 hours.

**Response**

Returns a [`LnInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                  | Description |
| ----------------------------------------------------- | ----------- |
| `input` - [`LnInvoiceCreateInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnInvoiceCreate($input: LnInvoiceCreateInput!) {
  lnInvoiceCreate(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnInvoiceCreateInput}
```

**Response**

```
{
  "data": {
    "lnInvoiceCreate": {
      "errors": [Error],
      "invoice": LnInvoice
    }
  }
}
```

### `lnInvoiceCreateOnBehalfOfRecipient`

**Description**

Returns a lightning invoice for an associated wallet. When invoice is paid the value will be credited to a BTC wallet. Expires after 24 hours.

**Response**

Returns a [`LnInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                                     | Description |
| ------------------------------------------------------------------------ | ----------- |
| `input` - [`LnInvoiceCreateOnBehalfOfRecipientInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnInvoiceCreateOnBehalfOfRecipient($input: LnInvoiceCreateOnBehalfOfRecipientInput!) {
  lnInvoiceCreateOnBehalfOfRecipient(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnInvoiceCreateOnBehalfOfRecipientInput}
```

**Response**

```
{
  "data": {
    "lnInvoiceCreateOnBehalfOfRecipient": {
      "errors": [Error],
      "invoice": LnInvoice
    }
  }
}
```

### `lnInvoiceFeeProbe`

**Response**

Returns a [`SatAmountPayload!`](broken-reference)

**Arguments**

| Name                                                    | Description |
| ------------------------------------------------------- | ----------- |
| `input` - [`LnInvoiceFeeProbeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {
  lnInvoiceFeeProbe(input: $input) {
    amount
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": LnInvoiceFeeProbeInput}
```

**Response**

```
{
  "data": {
    "lnInvoiceFeeProbe": {
      "amount": SatAmount,
      "errors": [Error]
    }
  }
}
```

### `lnInvoicePaymentSend`

**Description**

Pay a lightning invoice using a balance from a wallet which is owned by the account of the current user. Provided wallet can be USD or BTC and must have sufficient balance to cover amount in lightning invoice. Returns payment status (success, failed, pending, already\_paid).

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                   | Description |
| ------------------------------------------------------ | ----------- |
| `input` - [`LnInvoicePaymentInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
  lnInvoicePaymentSend(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": LnInvoicePaymentInput}
```

**Response**

```
{
  "data": {
    "lnInvoicePaymentSend": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `lnNoAmountInvoiceCreate`

**Description**

Returns a lightning invoice for an associated wallet. Can be used to receive any supported currency value (currently USD or BTC). Expires after 24 hours.

**Response**

Returns a [`LnNoAmountInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                          | Description |
| ------------------------------------------------------------- | ----------- |
| `input` - [`LnNoAmountInvoiceCreateInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {
  lnNoAmountInvoiceCreate(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnNoAmountInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnNoAmountInvoiceCreateInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountInvoiceCreate": {
      "errors": [Error],
      "invoice": LnNoAmountInvoice
    }
  }
}
```

### `lnNoAmountInvoiceCreateOnBehalfOfRecipient`

**Description**

Returns a lightning invoice for an associated wallet. Can be used to receive any supported currency value (currently USD or BTC). Expires after 24 hours.

**Response**

Returns a [`LnNoAmountInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                                             | Description |
| -------------------------------------------------------------------------------- | ----------- |
| `input` - [`LnNoAmountInvoiceCreateOnBehalfOfRecipientInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountInvoiceCreateOnBehalfOfRecipient($input: LnNoAmountInvoiceCreateOnBehalfOfRecipientInput!) {
  lnNoAmountInvoiceCreateOnBehalfOfRecipient(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnNoAmountInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnNoAmountInvoiceCreateOnBehalfOfRecipientInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountInvoiceCreateOnBehalfOfRecipient": {
      "errors": [Error],
      "invoice": LnNoAmountInvoice
    }
  }
}
```

### `lnNoAmountInvoiceFeeProbe`

**Response**

Returns a [`SatAmountPayload!`](broken-reference)

**Arguments**

| Name                                                            | Description |
| --------------------------------------------------------------- | ----------- |
| `input` - [`LnNoAmountInvoiceFeeProbeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountInvoiceFeeProbe($input: LnNoAmountInvoiceFeeProbeInput!) {
  lnNoAmountInvoiceFeeProbe(input: $input) {
    amount
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": LnNoAmountInvoiceFeeProbeInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountInvoiceFeeProbe": {
      "amount": SatAmount,
      "errors": [Error]
    }
  }
}
```

### `lnNoAmountInvoicePaymentSend`

**Description**

Pay a lightning invoice using a balance from a wallet which is owned by the account of the current user. Provided wallet must be BTC and must have sufficient balance to cover amount specified in mutation request. Returns payment status (success, failed, pending, already\_paid).

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| `input` - [`LnNoAmountInvoicePaymentInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountInvoicePaymentSend($input: LnNoAmountInvoicePaymentInput!) {
  lnNoAmountInvoicePaymentSend(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": LnNoAmountInvoicePaymentInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountInvoicePaymentSend": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `lnNoAmountUsdInvoiceFeeProbe`

**Response**

Returns a [`CentAmountPayload!`](broken-reference)

**Arguments**

| Name                                                               | Description |
| ------------------------------------------------------------------ | ----------- |
| `input` - [`LnNoAmountUsdInvoiceFeeProbeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountUsdInvoiceFeeProbe($input: LnNoAmountUsdInvoiceFeeProbeInput!) {
  lnNoAmountUsdInvoiceFeeProbe(input: $input) {
    amount
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": LnNoAmountUsdInvoiceFeeProbeInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountUsdInvoiceFeeProbe": {
      "amount": CentAmount,
      "errors": [Error]
    }
  }
}
```

### `lnNoAmountUsdInvoicePaymentSend`

**Description**

Pay a lightning invoice using a balance from a wallet which is owned by the account of the current user. Provided wallet must be USD and have sufficient balance to cover amount specified in mutation request. Returns payment status (success, failed, pending, already\_paid).

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                              | Description |
| ----------------------------------------------------------------- | ----------- |
| `input` - [`LnNoAmountUsdInvoicePaymentInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnNoAmountUsdInvoicePaymentSend($input: LnNoAmountUsdInvoicePaymentInput!) {
  lnNoAmountUsdInvoicePaymentSend(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": LnNoAmountUsdInvoicePaymentInput}
```

**Response**

```
{
  "data": {
    "lnNoAmountUsdInvoicePaymentSend": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `lnUsdInvoiceCreate`

**Description**

Returns a lightning invoice denominated in satoshis for an associated wallet. When invoice is paid the equivalent value at invoice creation will be credited to a USD wallet. Expires after 5 minutes (short expiry time because there is a USD/BTC exchange rate associated with the amount).

**Response**

Returns a [`LnInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                     | Description |
| -------------------------------------------------------- | ----------- |
| `input` - [`LnUsdInvoiceCreateInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {
  lnUsdInvoiceCreate(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnUsdInvoiceCreateInput}
```

**Response**

```
{
  "data": {
    "lnUsdInvoiceCreate": {
      "errors": [Error],
      "invoice": LnInvoice
    }
  }
}
```

### `lnUsdInvoiceCreateOnBehalfOfRecipient`

**Description**

Returns a lightning invoice denominated in satoshis for an associated wallet. When invoice is paid the equivalent value at invoice creation will be credited to a USD wallet. Expires after 5 minutes (short expiry time because there is a USD/BTC exchange rate associated with the amount).

**Response**

Returns a [`LnInvoicePayload!`](broken-reference)

**Arguments**

| Name                                                                        | Description |
| --------------------------------------------------------------------------- | ----------- |
| `input` - [`LnUsdInvoiceCreateOnBehalfOfRecipientInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {
  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {
    errors {
      ...ErrorFragment
    }
    invoice {
      ...LnInvoiceFragment
    }
  }
}
```

**Variables**

```
{"input": LnUsdInvoiceCreateOnBehalfOfRecipientInput}
```

**Response**

```
{
  "data": {
    "lnUsdInvoiceCreateOnBehalfOfRecipient": {
      "errors": [Error],
      "invoice": LnInvoice
    }
  }
}
```

### `lnUsdInvoiceFeeProbe`

**Response**

Returns a [`SatAmountPayload!`](broken-reference)

**Arguments**

| Name                                                       | Description |
| ---------------------------------------------------------- | ----------- |
| `input` - [`LnUsdInvoiceFeeProbeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {
  lnUsdInvoiceFeeProbe(input: $input) {
    amount
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": LnUsdInvoiceFeeProbeInput}
```

**Response**

```
{
  "data": {
    "lnUsdInvoiceFeeProbe": {
      "amount": SatAmount,
      "errors": [Error]
    }
  }
}
```

### `onChainAddressCreate`

**Response**

Returns an [`OnChainAddressPayload!`](broken-reference)

**Arguments**

| Name                                                       | Description |
| ---------------------------------------------------------- | ----------- |
| `input` - [`OnChainAddressCreateInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation onChainAddressCreate($input: OnChainAddressCreateInput!) {
  onChainAddressCreate(input: $input) {
    address
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": OnChainAddressCreateInput}
```

**Response**

```
{
  "data": {
    "onChainAddressCreate": {
      "address": OnChainAddress,
      "errors": [Error]
    }
  }
}
```

### `onChainAddressCurrent`

**Response**

Returns an [`OnChainAddressPayload!`](broken-reference)

**Arguments**

| Name                                                        | Description |
| ----------------------------------------------------------- | ----------- |
| `input` - [`OnChainAddressCurrentInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation onChainAddressCurrent($input: OnChainAddressCurrentInput!) {
  onChainAddressCurrent(input: $input) {
    address
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": OnChainAddressCurrentInput}
```

**Response**

```
{
  "data": {
    "onChainAddressCurrent": {
      "address": OnChainAddress,
      "errors": [Error]
    }
  }
}
```

### `onChainPaymentSend`

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                     | Description |
| -------------------------------------------------------- | ----------- |
| `input` - [`OnChainPaymentSendInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {
  onChainPaymentSend(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": OnChainPaymentSendInput}
```

**Response**

```
{
  "data": {
    "onChainPaymentSend": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `onChainPaymentSendAll`

**Response**

Returns a [`PaymentSendPayload!`](broken-reference)

**Arguments**

| Name                                                        | Description |
| ----------------------------------------------------------- | ----------- |
| `input` - [`OnChainPaymentSendAllInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation onChainPaymentSendAll($input: OnChainPaymentSendAllInput!) {
  onChainPaymentSendAll(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": OnChainPaymentSendAllInput}
```

**Response**

```
{
  "data": {
    "onChainPaymentSendAll": {
      "errors": [Error],
      "status": "ALREADY_PAID"
    }
  }
}
```

### `twoFADelete`

**Response**

Returns a [`SuccessPayload!`](broken-reference)

**Arguments**

| Name                                              | Description |
| ------------------------------------------------- | ----------- |
| `input` - [`TwoFADeleteInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation twoFADelete($input: TwoFADeleteInput!) {
  twoFADelete(input: $input) {
    errors {
      ...ErrorFragment
    }
    success
  }
}
```

**Variables**

```
{"input": TwoFADeleteInput}
```

**Response**

```
{
  "data": {
    "twoFADelete": {"errors": [Error], "success": true}
  }
}
```

### `twoFAGenerate`

**Response**

Returns a [`TwoFAGeneratePayload!`](broken-reference)

**Example**

**Query**

```
mutation twoFAGenerate {
  twoFAGenerate {
    errors {
      ...ErrorFragment
    }
    twoFASecret {
      ...TwoFASecretFragment
    }
  }
}
```

**Response**

```
{
  "data": {
    "twoFAGenerate": {
      "errors": [Error],
      "twoFASecret": TwoFASecret
    }
  }
}
```

### `twoFASave`

**Response**

Returns a [`SuccessPayload!`](broken-reference)

**Arguments**

| Name                                            | Description |
| ----------------------------------------------- | ----------- |
| `input` - [`TwoFASaveInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation twoFASave($input: TwoFASaveInput!) {
  twoFASave(input: $input) {
    errors {
      ...ErrorFragment
    }
    success
  }
}
```

**Variables**

```
{"input": TwoFASaveInput}
```

**Response**

```
{
  "data": {
    "twoFASave": {"errors": [Error], "success": true}
  }
}
```

### `userContactUpdateAlias`

will be moved to AccountContact

**Response**

Returns a [`UserContactUpdateAliasPayload!`](broken-reference)

**Arguments**

| Name                                                         | Description |
| ------------------------------------------------------------ | ----------- |
| `input` - [`UserContactUpdateAliasInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userContactUpdateAlias($input: UserContactUpdateAliasInput!) {
  userContactUpdateAlias(input: $input) {
    contact {
      ...UserContactFragment
    }
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": UserContactUpdateAliasInput}
```

**Response**

```
{
  "data": {
    "userContactUpdateAlias": {
      "contact": UserContact,
      "errors": [Error]
    }
  }
}
```

### `userLogin`

**Response**

Returns an [`AuthTokenPayload!`](broken-reference)

**Arguments**

| Name                                            | Description |
| ----------------------------------------------- | ----------- |
| `input` - [`UserLoginInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userLogin($input: UserLoginInput!) {
  userLogin(input: $input) {
    authToken
    errors {
      ...ErrorFragment
    }
  }
}
```

**Variables**

```
{"input": UserLoginInput}
```

**Response**

```
{
  "data": {
    "userLogin": {
      "authToken": AuthToken,
      "errors": [Error]
    }
  }
}
```

### `userQuizQuestionUpdateCompleted`

**Arguments**

| Name                                                                  | Description |
| --------------------------------------------------------------------- | ----------- |
| `input` - [`UserQuizQuestionUpdateCompletedInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userQuizQuestionUpdateCompleted($input: UserQuizQuestionUpdateCompletedInput!) {
  userQuizQuestionUpdateCompleted(input: $input) {
    errors {
      ...ErrorFragment
    }
    userQuizQuestion {
      ...UserQuizQuestionFragment
    }
  }
}
```

**Variables**

```
{"input": UserQuizQuestionUpdateCompletedInput}
```

**Response**

```
{
  "data": {
    "userQuizQuestionUpdateCompleted": {
      "errors": [Error],
      "userQuizQuestion": UserQuizQuestion
    }
  }
}
```

### `userRequestAuthCode`

**Response**

Returns a [`SuccessPayload!`](broken-reference)

**Arguments**

| Name                                                      | Description |
| --------------------------------------------------------- | ----------- |
| `input` - [`UserRequestAuthCodeInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userRequestAuthCode($input: UserRequestAuthCodeInput!) {
  userRequestAuthCode(input: $input) {
    errors {
      ...ErrorFragment
    }
    success
  }
}
```

**Variables**

```
{"input": UserRequestAuthCodeInput}
```

**Response**

```
{
  "data": {
    "userRequestAuthCode": {
      "errors": [Error],
      "success": true
    }
  }
}
```

### `userUpdateLanguage`

**Response**

Returns a [`UserUpdateLanguagePayload!`](broken-reference)

**Arguments**

| Name                                                     | Description |
| -------------------------------------------------------- | ----------- |
| `input` - [`UserUpdateLanguageInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userUpdateLanguage($input: UserUpdateLanguageInput!) {
  userUpdateLanguage(input: $input) {
    errors {
      ...ErrorFragment
    }
    user {
      ...UserFragment
    }
  }
}
```

**Variables**

```
{"input": UserUpdateLanguageInput}
```

**Response**

```
{
  "data": {
    "userUpdateLanguage": {
      "errors": [Error],
      "user": User
    }
  }
}
```

### `userUpdateUsername`

Username will be moved to @Handle in Accounts. Also SetUsername should be used instead of UpdateUsername to reflect the idempotency of Handles

**Response**

Returns a [`UserUpdateUsernamePayload!`](broken-reference)

**Arguments**

| Name                                                     | Description |
| -------------------------------------------------------- | ----------- |
| `input` - [`UserUpdateUsernameInput!`](broken-reference) |             |

**Example**

**Query**

```
mutation userUpdateUsername($input: UserUpdateUsernameInput!) {
  userUpdateUsername(input: $input) {
    errors {
      ...ErrorFragment
    }
    user {
      ...UserFragment
    }
  }
}
```

**Variables**

```
{"input": UserUpdateUsernameInput}
```

**Response**

```
{
  "data": {
    "userUpdateUsername": {
      "errors": [Error],
      "user": User
    }
  }
}
```

### Types <a href="#group-types" id="group-types"></a>

### Account

**Fields**

| Field Name                                                                                                                                                  | Description |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `csvTransactions` - [`String!`](broken-reference)                                                                                                           |             |
| <p><strong>Arguments</strong></p><p><strong><code>walletIds</code> -</strong> <a href="broken-reference"><strong><code>[WalletId!]!</code></strong></a></p> |             |
| `defaultWalletId` - [`WalletId!`](broken-reference)                                                                                                         |             |
| `id` - [`ID!`](broken-reference)                                                                                                                            |             |
| `wallets` - [`[Wallet!]!`](broken-reference)                                                                                                                |             |

**Possible Types**

| Account Types                         |
| ------------------------------------- |
| [`ConsumerAccount`](broken-reference) |

**Example**

```
{
  "csvTransactions": "abc123",
  "defaultWalletId": WalletId,
  "id": 4,
  "wallets": [Wallet]
}
```

### AccountUpdateDefaultWalletIdInput

**Fields**

| Input Field                                  | Description |
| -------------------------------------------- | ----------- |
| `walletId` - [`WalletId!`](broken-reference) |             |

**Example**

```
{"walletId": WalletId}
```

### AccountUpdateDefaultWalletIdPayload

**Fields**

| Field Name                                        | Description |
| ------------------------------------------------- | ----------- |
| `account` - [`ConsumerAccount`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference)        |             |

**Example**

```
{
  "account": ConsumerAccount,
  "errors": [Error]
}
```

### AuthToken

**Description**

An authentication code valid for a single use

### AuthTokenPayload

**Fields**

| Field Name                                    | Description |
| --------------------------------------------- | ----------- |
| `authToken` - [`AuthToken`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference)    |             |

**Example**

```
{
  "authToken": AuthToken,
  "errors": [Error]
}
```

### BTCWallet

**Description**

A wallet belonging to an account which contains a BTC balance and a list of transactions.

**Fields**

| Field Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `balance` - [`SignedAmount!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | A balance stored in BTC.                                |
| `id` - [`ID!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                         |
| `transactions` - [`TransactionConnection`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | A list of BTC transactions associated with this wallet. |
| <p><strong>Arguments</strong></p><p><strong><code>after</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come after the specified cursor.</p><p><strong><code>before</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come before the specified cursor.</p><p><strong><code>first</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the first n items from the list.</p><p><strong><code>last</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the last n items from the list.</p> |                                                         |
| `walletCurrency` - [`WalletCurrency!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                         |

**Example**

```
{
  "balance": SignedAmount,
  "id": "4",
  "transactions": TransactionConnection,
  "walletCurrency": "BTC"
}
```

### Boolean

**Description**

The `Boolean` scalar type represents `true` or `false`.

### BuildInformation

**Fields**

| Field Name                                    | Description |
| --------------------------------------------- | ----------- |
| `buildTime` - [`Timestamp`](broken-reference) |             |
| `commitHash` - [`String`](broken-reference)   |             |
| `helmRevision` - [`Int`](broken-reference)    |             |

**Example**

```
{
  "buildTime": 1592577642,
  "commitHash": "abc123",
  "helmRevision": 123
}
```

### CaptchaCreateChallengePayload

**Fields**

| Field Name                                                    | Description |
| ------------------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)                    |             |
| `result` - [`CaptchaCreateChallengeResult`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "result": CaptchaCreateChallengeResult
}
```

### CaptchaCreateChallengeResult

**Fields**

| Field Name                                      | Description |
| ----------------------------------------------- | ----------- |
| `challengeCode` - [`String!`](broken-reference) |             |
| `failbackMode` - [`Boolean!`](broken-reference) |             |
| `id` - [`String!`](broken-reference)            |             |
| `newCaptcha` - [`Boolean!`](broken-reference)   |             |

**Example**

```
{
  "challengeCode": "xyz789",
  "failbackMode": false,
  "id": "xyz789",
  "newCaptcha": false
}
```

### CaptchaRequestAuthCodeInput

**Fields**

| Input Field                                      | Description |
| ------------------------------------------------ | ----------- |
| `challengeCode` - [`String!`](broken-reference)  |             |
| `phone` - [`Phone!`](broken-reference)           |             |
| `secCode` - [`String!`](broken-reference)        |             |
| `validationCode` - [`String!`](broken-reference) |             |

**Example**

```
{
  "challengeCode": "xyz789",
  "phone": Phone,
  "secCode": "abc123",
  "validationCode": "abc123"
}
```

### CentAmount

**Description**

(Positive) Cent amount (1/100 of a dollar)

### CentAmountPayload

**Fields**

| Field Name                                  | Description |
| ------------------------------------------- | ----------- |
| `amount` - [`CentAmount`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference)  |             |

**Example**

```
{
  "amount": CentAmount,
  "errors": [Error]
}
```

### ConsumerAccount

**Fields**

| Field Name                                                                                                                                                  | Description                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `csvTransactions` - [`String!`](broken-reference)                                                                                                           | return CSV stream, base64 encoded, of the list of transactions in the wallet |
| <p><strong>Arguments</strong></p><p><strong><code>walletIds</code> -</strong> <a href="broken-reference"><strong><code>[WalletId!]!</code></strong></a></p> |                                                                              |
| `defaultWalletId` - [`WalletId!`](broken-reference)                                                                                                         |                                                                              |
| `id` - [`ID!`](broken-reference)                                                                                                                            |                                                                              |
| `wallets` - [`[Wallet!]!`](broken-reference)                                                                                                                |                                                                              |

**Example**

```
{
  "csvTransactions": "abc123",
  "defaultWalletId": WalletId,
  "id": 4,
  "wallets": [Wallet]
}
```

### ContactAlias

**Description**

An alias name that a user can set for a wallet (with which they have transactions)

### Coordinates

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `latitude` - [`Float!`](broken-reference)  |             |
| `longitude` - [`Float!`](broken-reference) |             |

**Example**

```
{"latitude": 987.65, "longitude": 987.65}
```

### DeviceNotificationTokenCreateInput

**Fields**

| Input Field                                   | Description |
| --------------------------------------------- | ----------- |
| `deviceToken` - [`String!`](broken-reference) |             |

**Example**

```
{"deviceToken": "xyz789"}
```

### Error

**Fields**

| Field Name                                | Description |
| ----------------------------------------- | ----------- |
| `message` - [`String!`](broken-reference) |             |
| `path` - [`[String]`](broken-reference)   |             |

**Possible Types**

| Error Types                        |
| ---------------------------------- |
| [`InputError`](broken-reference)   |
| [`PaymentError`](broken-reference) |

**Example**

```
{
  "message": "xyz789",
  "path": ["xyz789"]
}
```

### ExchangeCurrencyUnit

**Values**

| Enum Value | Description |
| ---------- | ----------- |
| `BTCSAT`   |             |
| `USDCENT`  |             |

### Float

**Description**

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE\_floating\_point).

### Globals

**Description**

Provides global settings for the application which might have an impact for the user.

**Fields**

| Field Name                                                   | Description                                                                                                                |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `buildInformation` - [`BuildInformation!`](broken-reference) |                                                                                                                            |
| `nodesIds` - [`[String!]!`](broken-reference)                | A list of public keys for the running lightning nodes. This can be used to know if an invoice belongs to one of our nodes. |

**Example**

```
{
  "buildInformation": BuildInformation,
  "nodesIds": ["abc123"]
}
```

### Hex32Bytes

**Description**

Hex-encoded string of 32 bytes

### ID

**Description**

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### InitiationVia

**Example**

```
InitiationViaIntraLedger
```

### InitiationViaIntraLedger

**Fields**

| Field Name                                              | Description |
| ------------------------------------------------------- | ----------- |
| `counterPartyUsername` - [`Username`](broken-reference) |             |
| `counterPartyWalletId` - [`WalletId`](broken-reference) |             |

**Example**

```
{
  "counterPartyUsername": Username,
  "counterPartyWalletId": WalletId
}
```

### InitiationViaLn

**Fields**

| Field Name                                         | Description |
| -------------------------------------------------- | ----------- |
| `paymentHash` - [`PaymentHash!`](broken-reference) |             |

**Example**

```
{"paymentHash": PaymentHash}
```

### InitiationViaOnChain

**Fields**

| Field Name                                        | Description |
| ------------------------------------------------- | ----------- |
| `address` - [`OnChainAddress!`](broken-reference) |             |

**Example**

```
{"address": OnChainAddress}
```

### InputError

**Fields**

| Field Name                                     | Description |
| ---------------------------------------------- | ----------- |
| `code` - [`InputErrorCode!`](broken-reference) |             |
| `message` - [`String!`](broken-reference)      |             |
| `path` - [`[String]`](broken-reference)        |             |

**Example**

```
{
  "code": "INVALID_INPUT",
  "message": "xyz789",
  "path": ["abc123"]
}
```

### InputErrorCode

**Values**

| Enum Value          | Description |
| ------------------- | ----------- |
| `INVALID_INPUT`     |             |
| `VALUE_NOT_ALLOWED` |             |
| `VALUE_TOO_LONG`    |             |
| `VALUE_TOO_SHORT`   |             |

### Int

**Description**

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### IntraLedgerPaymentSendInput

**Fields**

| Input Field                                           | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| `amount` - [`SatAmount!`](broken-reference)           | Amount in satoshis.                          |
| `memo` - [`Memo`](broken-reference)                   | Optional memo to be attached to the payment. |
| `recipientWalletId` - [`WalletId!`](broken-reference) |                                              |
| `walletId` - [`WalletId!`](broken-reference)          | The wallet ID of the sender.                 |

**Example**

```
{
  "amount": SatAmount,
  "memo": Memo,
  "recipientWalletId": WalletId,
  "walletId": WalletId
}
```

### IntraLedgerUpdate

**Fields**

| Field Name                                                       | Description                        |
| ---------------------------------------------------------------- | ---------------------------------- |
| `amount` - [`SatAmount!`](broken-reference)                      |                                    |
| `displayCurrencyPerSat` - [`Float!`](broken-reference)           |                                    |
| `txNotificationType` - [`TxNotificationType!`](broken-reference) |                                    |
| `usdPerSat` - [`Float!`](broken-reference)                       | updated over displayCurrencyPerSat |
| `walletId` - [`WalletId!`](broken-reference)                     |                                    |

**Example**

```
{
  "amount": SatAmount,
  "displayCurrencyPerSat": 987.65,
  "txNotificationType": "IntraLedgerPayment",
  "usdPerSat": 123.45,
  "walletId": WalletId
}
```

### InvoicePaymentStatus

**Values**

| Enum Value | Description |
| ---------- | ----------- |
| `PAID`     |             |
| `PENDING`  |             |

### Language

### LnInvoice

**Fields**

| Field Name                                                 | Description |
| ---------------------------------------------------------- | ----------- |
| `paymentHash` - [`PaymentHash!`](broken-reference)         |             |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `paymentSecret` - [`LnPaymentSecret!`](broken-reference)   |             |
| `satoshis` - [`SatAmount`](broken-reference)               |             |

**Example**

```
{
  "paymentHash": PaymentHash,
  "paymentRequest": LnPaymentRequest,
  "paymentSecret": LnPaymentSecret,
  "satoshis": SatAmount
}
```

### LnInvoiceCreateInput

**Fields**

| Input Field                                  | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `amount` - [`SatAmount!`](broken-reference)  | Amount in satoshis.                                          |
| `memo` - [`Memo`](broken-reference)          | Optional memo for the lightning invoice.                     |
| `walletId` - [`WalletId!`](broken-reference) | Wallet ID for a BTC wallet belonging to the current account. |

**Example**

```
{
  "amount": SatAmount,
  "memo": Memo,
  "walletId": WalletId
}
```

### LnInvoiceCreateOnBehalfOfRecipientInput

**Fields**

| Input Field                                           | Description                                              |
| ----------------------------------------------------- | -------------------------------------------------------- |
| `amount` - [`SatAmount!`](broken-reference)           | Amount in satoshis.                                      |
| `descriptionHash` - [`Hex32Bytes`](broken-reference)  |                                                          |
| `memo` - [`Memo`](broken-reference)                   | Optional memo for the lightning invoice.                 |
| `recipientWalletId` - [`WalletId!`](broken-reference) | Wallet ID for a BTC wallet which belongs to any account. |

**Example**

```
{
  "amount": SatAmount,
  "descriptionHash": Hex32Bytes,
  "memo": Memo,
  "recipientWalletId": WalletId
}
```

### LnInvoiceFeeProbeInput

**Fields**

| Input Field                                                | Description |
| ---------------------------------------------------------- | ----------- |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)               |             |

**Example**

```
{
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnInvoicePayload

**Fields**

| Field Name                                  | Description |
| ------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)  |             |
| `invoice` - [`LnInvoice`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "invoice": LnInvoice
}
```

### LnInvoicePaymentInput

**Fields**

| Input Field                                                | Description                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `memo` - [`Memo`](broken-reference)                        | Optional memo to associate with the lightning invoice.                                                        |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) | Payment request representing the invoice which is being paid.                                                 |
| `walletId` - [`WalletId!`](broken-reference)               | Wallet ID with sufficient balance to cover amount of invoice. Must belong to the account of the current user. |

**Example**

```
{
  "memo": Memo,
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnInvoicePaymentStatusInput

**Fields**

| Input Field                                                | Description |
| ---------------------------------------------------------- | ----------- |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |

**Example**

```
{"paymentRequest": LnPaymentRequest}
```

### LnInvoicePaymentStatusPayload

**Fields**

| Field Name                                            | Description |
| ----------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)            |             |
| `status` - [`InvoicePaymentStatus`](broken-reference) |             |

**Example**

```
{"errors": [Error], "status": "PAID"}
```

### LnNoAmountInvoice

**Fields**

| Field Name                                                 | Description |
| ---------------------------------------------------------- | ----------- |
| `paymentHash` - [`PaymentHash!`](broken-reference)         |             |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `paymentSecret` - [`LnPaymentSecret!`](broken-reference)   |             |

**Example**

```
{
  "paymentHash": PaymentHash,
  "paymentRequest": LnPaymentRequest,
  "paymentSecret": LnPaymentSecret
}
```

### LnNoAmountInvoiceCreateInput

**Fields**

| Input Field                                  | Description                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------- |
| `memo` - [`Memo`](broken-reference)          | Optional memo for the lightning invoice.                                        |
| `walletId` - [`WalletId!`](broken-reference) | ID for either a USD or BTC wallet belonging to the account of the current user. |

**Example**

```
{"memo": Memo, "walletId": WalletId}
```

### LnNoAmountInvoiceCreateOnBehalfOfRecipientInput

**Fields**

| Input Field                                           | Description                                                                 |
| ----------------------------------------------------- | --------------------------------------------------------------------------- |
| `memo` - [`Memo`](broken-reference)                   | Optional memo for the lightning invoice.                                    |
| `recipientWalletId` - [`WalletId!`](broken-reference) | ID for either a USD or BTC wallet which belongs to the account of any user. |

**Example**

```
{
  "memo": Memo,
  "recipientWalletId": WalletId
}
```

### LnNoAmountInvoiceFeeProbeInput

**Fields**

| Input Field                                                | Description |
| ---------------------------------------------------------- | ----------- |
| `amount` - [`SatAmount!`](broken-reference)                |             |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)               |             |

**Example**

```
{
  "amount": SatAmount,
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnNoAmountInvoicePayload

**Fields**

| Field Name                                          | Description |
| --------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)          |             |
| `invoice` - [`LnNoAmountInvoice`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "invoice": LnNoAmountInvoice
}
```

### LnNoAmountInvoicePaymentInput

**Fields**

| Input Field                                                | Description                                                                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `amount` - [`SatAmount!`](broken-reference)                | Amount to pay in satoshis.                                                                                                     |
| `memo` - [`Memo`](broken-reference)                        | Optional memo to associate with the lightning invoice.                                                                         |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) | Payment request representing the invoice which is being paid.                                                                  |
| `walletId` - [`WalletId!`](broken-reference)               | Wallet ID with sufficient balance to cover amount defined in mutation request. Must belong to the account of the current user. |

**Example**

```
{
  "amount": SatAmount,
  "memo": Memo,
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnNoAmountUsdInvoiceFeeProbeInput

**Fields**

| Input Field                                                | Description |
| ---------------------------------------------------------- | ----------- |
| `amount` - [`CentAmount!`](broken-reference)               |             |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)               |             |

**Example**

```
{
  "amount": CentAmount,
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnNoAmountUsdInvoicePaymentInput

**Fields**

| Input Field                                                | Description                                                                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `amount` - [`CentAmount!`](broken-reference)               | Amount to pay in USD cents.                                                                                                    |
| `memo` - [`Memo`](broken-reference)                        | Optional memo to associate with the lightning invoice.                                                                         |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) | Payment request representing the invoice which is being paid.                                                                  |
| `walletId` - [`WalletId!`](broken-reference)               | Wallet ID with sufficient balance to cover amount defined in mutation request. Must belong to the account of the current user. |

**Example**

```
{
  "amount": CentAmount,
  "memo": Memo,
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### LnPaymentPreImage

**Example**

```
LnPaymentPreImage
```

### LnPaymentRequest

**Description**

BOLT11 lightning invoice payment request with the amount included

### LnPaymentSecret

### LnUpdate

**Fields**

| Field Name                                             | Description |
| ------------------------------------------------------ | ----------- |
| `paymentHash` - [`PaymentHash!`](broken-reference)     |             |
| `status` - [`InvoicePaymentStatus!`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)           |             |

**Example**

```
{
  "paymentHash": PaymentHash,
  "status": "PAID",
  "walletId": WalletId
}
```

### LnUsdInvoiceCreateInput

**Fields**

| Input Field                                  | Description                                               |
| -------------------------------------------- | --------------------------------------------------------- |
| `amount` - [`CentAmount!`](broken-reference) | Amount in USD cents.                                      |
| `memo` - [`Memo`](broken-reference)          | Optional memo for the lightning invoice.                  |
| `walletId` - [`WalletId!`](broken-reference) | Wallet ID for a USD wallet belonging to the current user. |

**Example**

```
{
  "amount": CentAmount,
  "memo": Memo,
  "walletId": WalletId
}
```

### LnUsdInvoiceCreateOnBehalfOfRecipientInput

**Fields**

| Input Field                                           | Description                                                               |
| ----------------------------------------------------- | ------------------------------------------------------------------------- |
| `amount` - [`CentAmount!`](broken-reference)          | Amount in USD cents.                                                      |
| `descriptionHash` - [`Hex32Bytes`](broken-reference)  |                                                                           |
| `memo` - [`Memo`](broken-reference)                   | Optional memo for the lightning invoice. Acts as a note to the recipient. |
| `recipientWalletId` - [`WalletId!`](broken-reference) | Wallet ID for a USD wallet which belongs to the account of any user.      |

**Example**

```
{
  "amount": CentAmount,
  "descriptionHash": Hex32Bytes,
  "memo": Memo,
  "recipientWalletId": WalletId
}
```

### LnUsdInvoiceFeeProbeInput

**Fields**

| Input Field                                                | Description |
| ---------------------------------------------------------- | ----------- |
| `paymentRequest` - [`LnPaymentRequest!`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)               |             |

**Example**

```
{
  "paymentRequest": LnPaymentRequest,
  "walletId": WalletId
}
```

### MapInfo

**Fields**

| Field Name                                         | Description |
| -------------------------------------------------- | ----------- |
| `coordinates` - [`Coordinates!`](broken-reference) |             |
| `title` - [`String!`](broken-reference)            |             |

**Example**

```
{
  "coordinates": Coordinates,
  "title": "xyz789"
}
```

### MapMarker

**Fields**

| Field Name                                  | Description |
| ------------------------------------------- | ----------- |
| `mapInfo` - [`MapInfo!`](broken-reference)  |             |
| `username` - [`Username`](broken-reference) |             |

**Example**

```
{
  "mapInfo": MapInfo,
  "username": Username
}
```

### Memo

**Description**

Text field in a lightning payment transaction

### MobileVersions

**Fields**

| Field Name                                      | Description |
| ----------------------------------------------- | ----------- |
| `currentSupported` - [`Int!`](broken-reference) |             |
| `minSupported` - [`Int!`](broken-reference)     |             |
| `platform` - [`String!`](broken-reference)      |             |

**Example**

```
{
  "currentSupported": 123,
  "minSupported": 987,
  "platform": "abc123"
}
```

### MyUpdatesPayload

**Fields**

| Field Name                                  | Description |
| ------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)  |             |
| `me` - [`User`](broken-reference)           |             |
| `update` - [`UserUpdate`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "me": User,
  "update": IntraLedgerUpdate
}
```

### OnChainAddress

**Description**

An address for an on-chain bitcoin destination

### OnChainAddressCreateInput

**Fields**

| Input Field                                  | Description |
| -------------------------------------------- | ----------- |
| `walletId` - [`WalletId!`](broken-reference) |             |

**Example**

```
{"walletId": WalletId}
```

### OnChainAddressCurrentInput

**Fields**

| Input Field                                  | Description |
| -------------------------------------------- | ----------- |
| `walletId` - [`WalletId!`](broken-reference) |             |

**Example**

```
{"walletId": WalletId}
```

### OnChainAddressPayload

**Fields**

| Field Name                                       | Description |
| ------------------------------------------------ | ----------- |
| `address` - [`OnChainAddress`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference)       |             |

**Example**

```
{
  "address": OnChainAddress,
  "errors": [Error]
}
```

### OnChainPaymentSendAllInput

**Fields**

| Input Field                                                       | Description |
| ----------------------------------------------------------------- | ----------- |
| `address` - [`OnChainAddress!`](broken-reference)                 |             |
| `memo` - [`Memo`](broken-reference)                               |             |
| `targetConfirmations` - [`TargetConfirmations`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)                      |             |

**Example**

```
{
  "address": OnChainAddress,
  "memo": Memo,
  "targetConfirmations": TargetConfirmations,
  "walletId": WalletId
}
```

### OnChainPaymentSendInput

**Fields**

| Input Field                                                       | Description |
| ----------------------------------------------------------------- | ----------- |
| `address` - [`OnChainAddress!`](broken-reference)                 |             |
| `amount` - [`SatAmount!`](broken-reference)                       |             |
| `memo` - [`Memo`](broken-reference)                               |             |
| `targetConfirmations` - [`TargetConfirmations`](broken-reference) |             |
| `walletId` - [`WalletId!`](broken-reference)                      |             |

**Example**

```
{
  "address": OnChainAddress,
  "amount": SatAmount,
  "memo": Memo,
  "targetConfirmations": TargetConfirmations,
  "walletId": WalletId
}
```

### OnChainTxFee

**Fields**

| Field Name                                                         | Description |
| ------------------------------------------------------------------ | ----------- |
| `amount` - [`SatAmount!`](broken-reference)                        |             |
| `targetConfirmations` - [`TargetConfirmations!`](broken-reference) |             |

**Example**

```
{
  "amount": SatAmount,
  "targetConfirmations": TargetConfirmations
}
```

### OnChainTxHash

### OnChainUpdate

**Fields**

| Field Name                                                       | Description                        |
| ---------------------------------------------------------------- | ---------------------------------- |
| `amount` - [`SatAmount!`](broken-reference)                      |                                    |
| `displayCurrencyPerSat` - [`Float!`](broken-reference)           |                                    |
| `txHash` - [`OnChainTxHash!`](broken-reference)                  |                                    |
| `txNotificationType` - [`TxNotificationType!`](broken-reference) |                                    |
| `usdPerSat` - [`Float!`](broken-reference)                       | updated over displayCurrencyPerSat |
| `walletId` - [`WalletId!`](broken-reference)                     |                                    |

**Example**

```
{
  "amount": SatAmount,
  "displayCurrencyPerSat": 123.45,
  "txHash": OnChainTxHash,
  "txNotificationType": "IntraLedgerPayment",
  "usdPerSat": 123.45,
  "walletId": WalletId
}
```

### OneTimeAuthCode

**Description**

An authentication code valid for a single use

### PageInfo

**Description**

Information about pagination in a connection.

**Fields**

| Field Name                                         | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- |
| `endCursor` - [`String`](broken-reference)         | When paginating forwards, the cursor to continue.  |
| `hasNextPage` - [`Boolean!`](broken-reference)     | When paginating forwards, are there more items?    |
| `hasPreviousPage` - [`Boolean!`](broken-reference) | When paginating backwards, are there more items?   |
| `startCursor` - [`String`](broken-reference)       | When paginating backwards, the cursor to continue. |

**Example**

```
{
  "endCursor": "abc123",
  "hasNextPage": true,
  "hasPreviousPage": true,
  "startCursor": "xyz789"
}
```

### PaymentError

**Fields**

| Field Name                                       | Description |
| ------------------------------------------------ | ----------- |
| `code` - [`PaymentErrorCode!`](broken-reference) |             |
| `message` - [`String!`](broken-reference)        |             |
| `path` - [`[String]`](broken-reference)          |             |

**Example**

```
{
  "code": "ACCOUNT_LOCKED",
  "message": "abc123",
  "path": ["xyz789"]
}
```

### PaymentErrorCode

**Values**

| Enum Value             | Description |
| ---------------------- | ----------- |
| `ACCOUNT_LOCKED`       |             |
| `INSUFFICIENT_BALANCE` |             |
| `INVOICE_PAID`         |             |
| `LIMIT_EXCEEDED`       |             |
| `NO_LIQUIDITY`         |             |
| `NO_ROUTE`             |             |

### PaymentHash

### PaymentSendPayload

**Fields**

| Field Name                                         | Description |
| -------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)         |             |
| `status` - [`PaymentSendResult`](broken-reference) |             |

**Example**

```
{"errors": [Error], "status": "ALREADY_PAID"}
```

### PaymentSendResult

**Values**

| Enum Value     | Description |
| -------------- | ----------- |
| `ALREADY_PAID` |             |
| `FAILURE`      |             |
| `PENDING`      |             |
| `SUCCESS`      |             |

### Phone

**Description**

Phone number which includes country code

### Price

**Description**

Price amount expressed in base/offset. To calculate, use: `base / 10^offset`

**Fields**

| Field Name                                                   | Description |
| ------------------------------------------------------------ | ----------- |
| `base` - [`SafeInt!`](broken-reference)                      |             |
| `currencyUnit` - [`ExchangeCurrencyUnit!`](broken-reference) |             |
| `formattedAmount` - [`String!`](broken-reference)            |             |
| `offset` - [`Int!`](broken-reference)                        |             |

**Example**

```
{
  "base": 9007199254740991,
  "currencyUnit": "BTCSAT",
  "formattedAmount": "xyz789",
  "offset": 123
}
```

### PriceGraphRange

**Description**

The range for the X axis in the BTC price graph

**Values**

| Enum Value   | Description |
| ------------ | ----------- |
| `FIVE_YEARS` |             |
| `ONE_DAY`    |             |
| `ONE_MONTH`  |             |
| `ONE_WEEK`   |             |
| `ONE_YEAR`   |             |

### PriceInput

**Fields**

| Input Field                                                        | Description |
| ------------------------------------------------------------------ | ----------- |
| `amount` - [`SatAmount!`](broken-reference)                        |             |
| `amountCurrencyUnit` - [`ExchangeCurrencyUnit!`](broken-reference) |             |
| `priceCurrencyUnit` - [`ExchangeCurrencyUnit!`](broken-reference)  |             |

**Example**

```
{
  "amount": SatAmount,
  "amountCurrencyUnit": "BTCSAT",
  "priceCurrencyUnit": "BTCSAT"
}
```

### PricePayload

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `errors` - [`[Error!]!`](broken-reference) |             |
| `price` - [`Price`](broken-reference)      |             |

**Example**

```
{"errors": [Error], "price": Price}
```

### PricePoint

**Fields**

| Field Name                                     | Description                                                                   |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| `price` - [`Price!`](broken-reference)         |                                                                               |
| `timestamp` - [`Timestamp!`](broken-reference) | Unix timestamp (number of seconds elapsed since January 1, 1970 00:00:00 UTC) |

**Example**

```
{"price": Price, "timestamp": 1592577642}
```

### PublicWallet

**Description**

A public view of a generic wallet which stores value in one of our supported currencies.

**Fields**

| Field Name                                               | Description |
| -------------------------------------------------------- | ----------- |
| `id` - [`ID!`](broken-reference)                         |             |
| `walletCurrency` - [`WalletCurrency!`](broken-reference) |             |

**Example**

```
{"id": "4", "walletCurrency": "BTC"}
```

### QuizQuestion

**Fields**

| Field Name                                      | Description                                       |
| ----------------------------------------------- | ------------------------------------------------- |
| `earnAmount` - [`SatAmount!`](broken-reference) | The earn reward in Satoshis for the quiz question |
| `id` - [`ID!`](broken-reference)                |                                                   |

**Example**

```
{
  "earnAmount": SatAmount,
  "id": "4"
}
```

### SafeInt

**Description**

Non-fractional signed whole numeric value between -(2^53) + 1 and 2^53 - 1

### SatAmount

**Description**

(Positive) Satoshi amount

### SatAmountPayload

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `amount` - [`SatAmount`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference) |             |

**Example**

```
{
  "amount": SatAmount,
  "errors": [Error]
}
```

### SettlementVia

**Example**

```
SettlementViaIntraLedger
```

### SettlementViaIntraLedger

**Fields**

| Field Name                                              | Description                                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| `counterPartyUsername` - [`Username`](broken-reference) | Settlement destination: Could be null if the payee does not have a username |
| `counterPartyWalletId` - [`WalletId`](broken-reference) |                                                                             |

**Example**

```
{
  "counterPartyUsername": Username,
  "counterPartyWalletId": WalletId
}
```

### SettlementViaLn

**Fields**

| Field Name                                              | Description                                                                        |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paymentSecret` - [`LnPaymentSecret`](broken-reference) | Shifting property to 'preImage' to improve granularity of the LnPaymentSecret type |
| `preImage` - [`LnPaymentPreImage`](broken-reference)    |                                                                                    |

**Example**

```
{
  "paymentSecret": LnPaymentSecret,
  "preImage": LnPaymentPreImage
}
```

### SettlementViaOnChain

**Fields**

| Field Name                                               | Description |
| -------------------------------------------------------- | ----------- |
| `transactionHash` - [`OnChainTxHash!`](broken-reference) |             |

**Example**

```
{"transactionHash": OnChainTxHash}
```

### SignedAmount

**Description**

An amount (of a currency) that can be negative (e.g. in a transaction)

### String

**Description**

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### SuccessPayload

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `errors` - [`[Error!]!`](broken-reference) |             |
| `success` - [`Boolean`](broken-reference)  |             |

**Example**

```
{"errors": [Error], "success": false}
```

### TargetConfirmations

**Description**

(Positive) Number of blocks in which the transaction is expected to be confirmed

**Example**

```
TargetConfirmations
```

### Timestamp

**Description**

Timestamp field, serialized as Unix time (the number of seconds since the Unix epoch)

### Transaction

**Description**

Give details about an individual transaction. Galoy have a smart routing system which is automatically settling intraledger when both the payer and payee use the same wallet therefore it's possible the transactions is being initiated onchain or with lightning but settled intraledger.

**Fields**

| Field Name                                             | Description                                         |
| ------------------------------------------------------ | --------------------------------------------------- |
| `createdAt` - [`Timestamp!`](broken-reference)         |                                                     |
| `direction` - [`TxDirection!`](broken-reference)       |                                                     |
| `id` - [`ID!`](broken-reference)                       |                                                     |
| `initiationVia` - [`InitiationVia!`](broken-reference) | From which protocol the payment has been initiated. |
| `memo` - [`Memo`](broken-reference)                    |                                                     |
| `settlementAmount` - [`SatAmount!`](broken-reference)  | Amount of sats sent or received.                    |
| `settlementFee` - [`SatAmount!`](broken-reference)     |                                                     |
| `settlementPrice` - [`Price!`](broken-reference)       | Price in USDCENT/SATS at time of settlement.        |
| `settlementVia` - [`SettlementVia!`](broken-reference) | To which protocol the payment has settled on.       |
| `status` - [`TxStatus!`](broken-reference)             |                                                     |

**Example**

```
{
  "createdAt": 1592577642,
  "direction": "RECEIVE",
  "id": 4,
  "initiationVia": InitiationViaIntraLedger,
  "memo": Memo,
  "settlementAmount": SatAmount,
  "settlementFee": SatAmount,
  "settlementPrice": Price,
  "settlementVia": SettlementViaIntraLedger,
  "status": "FAILURE"
}
```

### TransactionConnection

**Description**

A connection to a list of items.

**Fields**

| Field Name                                         | Description                       |
| -------------------------------------------------- | --------------------------------- |
| `edges` - [`[TransactionEdge!]`](broken-reference) | A list of edges.                  |
| `pageInfo` - [`PageInfo!`](broken-reference)       | Information to aid in pagination. |

**Example**

```
{
  "edges": [TransactionEdge],
  "pageInfo": PageInfo
}
```

### TransactionEdge

**Description**

An edge in a connection.

**Fields**

| Field Name                                  | Description                     |
| ------------------------------------------- | ------------------------------- |
| `cursor` - [`String!`](broken-reference)    | A cursor for use in pagination  |
| `node` - [`Transaction!`](broken-reference) | The item at the end of the edge |

**Example**

```
{
  "cursor": "xyz789",
  "node": Transaction
}
```

### TwoFADeleteInput

**Fields**

| Input Field                             | Description |
| --------------------------------------- | ----------- |
| `token` - [`String!`](broken-reference) |             |

**Example**

```
{"token": "abc123"}
```

### TwoFAGeneratePayload

**Fields**

| Field Name                                        | Description |
| ------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)        |             |
| `twoFASecret` - [`TwoFASecret`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "twoFASecret": TwoFASecret
}
```

### TwoFASaveInput

**Fields**

| Input Field                              | Description |
| ---------------------------------------- | ----------- |
| `secret` - [`String!`](broken-reference) |             |
| `token` - [`String!`](broken-reference)  |             |

**Example**

```
{
  "secret": "abc123",
  "token": "xyz789"
}
```

### TwoFASecret

**Fields**

| Field Name                               | Description |
| ---------------------------------------- | ----------- |
| `secret` - [`String!`](broken-reference) |             |
| `uri` - [`String!`](broken-reference)    |             |

**Example**

```
{
  "secret": "xyz789",
  "uri": "abc123"
}
```

### TxDirection

**Values**

| Enum Value | Description |
| ---------- | ----------- |
| `RECEIVE`  |             |
| `SEND`     |             |

### TxNotificationType

**Values**

| Enum Value              | Description |
| ----------------------- | ----------- |
| `IntraLedgerPayment`    |             |
| `IntraLedgerReceipt`    |             |
| `LnInvoicePaid`         |             |
| `OnchainPayment`        |             |
| `OnchainReceipt`        |             |
| `OnchainReceiptPending` |             |

**Example**

```
"IntraLedgerPayment"
```

### TxStatus

**Values**

| Enum Value | Description |
| ---------- | ----------- |
| `FAILURE`  |             |
| `PENDING`  |             |
| `SUCCESS`  |             |

### UsdWallet

**Description**

A wallet belonging to an account which contains a USD balance and a list of transactions.

**Fields**

| Field Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `balance` - [`SignedAmount!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |             |
| `id` - [`ID!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |             |
| `transactions` - [`TransactionConnection`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |             |
| <p><strong>Arguments</strong></p><p><strong><code>after</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come after the specified cursor.</p><p><strong><code>before</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come before the specified cursor.</p><p><strong><code>first</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the first n items from the list.</p><p><strong><code>last</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the last n items from the list.</p> |             |
| `walletCurrency` - [`WalletCurrency!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |             |

**Example**

```
{
  "balance": SignedAmount,
  "id": 4,
  "transactions": TransactionConnection,
  "walletCurrency": "BTC"
}
```

### User

**Fields**

| Field Name                                                                                                                                              | Description                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contactByUsername` - [`UserContact!`](broken-reference)                                                                                                | Get single contact details. Can include the transactions associated with the contact. will be moved to Accounts |
| <p><strong>Arguments</strong></p><p><strong><code>username</code> -</strong> <a href="broken-reference"><strong><code>Username!</code></strong></a></p> |                                                                                                                 |
| `contacts` - [`[UserContact!]!`](broken-reference)                                                                                                      | Get full list of contacts. Can include the transactions associated with each contact. will be moved to account  |
| `createdAt` - [`Timestamp!`](broken-reference)                                                                                                          |                                                                                                                 |
| `defaultAccount` - [`Account!`](broken-reference)                                                                                                       |                                                                                                                 |
| `id` - [`ID!`](broken-reference)                                                                                                                        |                                                                                                                 |
| `language` - [`Language!`](broken-reference)                                                                                                            | Preferred language for user. When value is 'default' the intent is to use preferred language from OS settings.  |
| `phone` - [`Phone`](broken-reference)                                                                                                                   | Phone number with international calling code.                                                                   |
| `quizQuestions` - [`[UserQuizQuestion!]!`](broken-reference)                                                                                            | List the quiz questions the user may have completed. will be moved to Accounts                                  |
| `twoFAEnabled` - [`Boolean`](broken-reference)                                                                                                          |                                                                                                                 |
| `username` - [`Username`](broken-reference)                                                                                                             | Optional immutable user friendly identifier. will be moved to @Handle in Account and Wallet                     |

**Example**

```
{
  "contactByUsername": UserContact,
  "contacts": [UserContact],
  "createdAt": 1592577642,
  "defaultAccount": Account,
  "id": 4,
  "language": Language,
  "phone": Phone,
  "quizQuestions": [UserQuizQuestion],
  "twoFAEnabled": true,
  "username": Username
}
```

### UserContact

**Fields**

| Field Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `alias` - [`ContactAlias`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Alias the user can set for this contact. Only the user can see the alias attached to their contact. |
| `id` - [`Username!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                     |
| `transactions` - [`TransactionConnection`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Paginated list of transactions sent to/from this contact.                                           |
| <p><strong>Arguments</strong></p><p><strong><code>after</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come after the specified cursor.</p><p><strong><code>before</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come before the specified cursor.</p><p><strong><code>first</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the first n items from the list.</p><p><strong><code>last</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the last n items from the list.</p> |                                                                                                     |
| `transactionsCount` - [`Int!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                     |
| `username` - [`Username!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Actual identifier of the contact.                                                                   |

**Example**

```
{
  "alias": ContactAlias,
  "id": Username,
  "transactions": TransactionConnection,
  "transactionsCount": 123,
  "username": Username
}
```

### UserContactUpdateAliasInput

**Fields**

| Input Field                                   | Description |
| --------------------------------------------- | ----------- |
| `alias` - [`ContactAlias!`](broken-reference) |             |
| `username` - [`Username!`](broken-reference)  |             |

**Example**

```
{
  "alias": ContactAlias,
  "username": Username
}
```

### UserContactUpdateAliasPayload

**Fields**

| Field Name                                    | Description |
| --------------------------------------------- | ----------- |
| `contact` - [`UserContact`](broken-reference) |             |
| `errors` - [`[Error!]!`](broken-reference)    |             |

**Example**

```
{
  "contact": UserContact,
  "errors": [Error]
}
```

### UserLoginInput

**Fields**

| Input Field                                     | Description |
| ----------------------------------------------- | ----------- |
| `code` - [`OneTimeAuthCode!`](broken-reference) |             |
| `phone` - [`Phone!`](broken-reference)          |             |

**Example**

```
{
  "code": OneTimeAuthCode,
  "phone": Phone
}
```

### UserQuizQuestion

**Fields**

| Field Name                                       | Description |
| ------------------------------------------------ | ----------- |
| `completed` - [`Boolean!`](broken-reference)     |             |
| `question` - [`QuizQuestion!`](broken-reference) |             |

**Example**

```
{"completed": true, "question": QuizQuestion}
```

### UserQuizQuestionUpdateCompletedInput

**Fields**

| Input Field                      | Description |
| -------------------------------- | ----------- |
| `id` - [`ID!`](broken-reference) |             |

### UserQuizQuestionUpdateCompletedPayload

**Fields**

| Field Name                                                  | Description |
| ----------------------------------------------------------- | ----------- |
| `errors` - [`[Error!]!`](broken-reference)                  |             |
| `userQuizQuestion` - [`UserQuizQuestion`](broken-reference) |             |

**Example**

```
{
  "errors": [Error],
  "userQuizQuestion": UserQuizQuestion
}
```

### UserRequestAuthCodeInput

**Fields**

| Input Field                            | Description |
| -------------------------------------- | ----------- |
| `phone` - [`Phone!`](broken-reference) |             |

### UserUpdate

**Example**

```
IntraLedgerUpdate
```

### UserUpdateLanguageInput

**Fields**

| Input Field                                  | Description |
| -------------------------------------------- | ----------- |
| `language` - [`Language!`](broken-reference) |             |

**Example**

```
{"language": Language}
```

### UserUpdateLanguagePayload

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `errors` - [`[Error!]!`](broken-reference) |             |
| `user` - [`User`](broken-reference)        |             |

**Example**

```
{"errors": [Error], "user": User}
```

### UserUpdateUsernameInput

**Fields**

| Input Field                                  | Description |
| -------------------------------------------- | ----------- |
| `username` - [`Username!`](broken-reference) |             |

**Example**

```
{"username": Username}
```

### UserUpdateUsernamePayload

**Fields**

| Field Name                                 | Description |
| ------------------------------------------ | ----------- |
| `errors` - [`[Error!]!`](broken-reference) |             |
| `user` - [`User`](broken-reference)        |             |

**Example**

```
{"errors": [Error], "user": User}
```

### Username

**Description**

Unique identifier of a user

### Wallet

**Description**

A generic wallet which stores value in one of our supported currencies.

**Fields**

| Field Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `balance` - [`SignedAmount!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                         |
| `id` - [`ID!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                         |
| `transactions` - [`TransactionConnection`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Transactions are ordered anti-chronologically, ie: the newest transaction will be first |
| <p><strong>Arguments</strong></p><p><strong><code>after</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come after the specified cursor.</p><p><strong><code>before</code> -</strong> <a href="broken-reference"><strong><code>String</code></strong></a></p><p>Returns the items in the list that come before the specified cursor.</p><p><strong><code>first</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the first n items from the list.</p><p><strong><code>last</code> -</strong> <a href="broken-reference"><strong><code>Int</code></strong></a></p><p>Returns the last n items from the list.</p> |                                                                                         |
| `walletCurrency` - [`WalletCurrency!`](broken-reference)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                         |

**Possible Types**

| Wallet Types                    |
| ------------------------------- |
| [`BTCWallet`](broken-reference) |
| [`UsdWallet`](broken-reference) |

**Example**

```
{
  "balance": SignedAmount,
  "id": "4",
  "transactions": TransactionConnection,
  "walletCurrency": "BTC"
}
```

### WalletCurrency

**Values**

| Enum Value | Description |
| ---------- | ----------- |
| `BTC`      |             |
| `USD`      |             |

### WalletId

**Description**

Unique identifier of a wallet

### Subscriptions <a href="#group-subscriptions" id="group-subscriptions"></a>

### `lnInvoicePaymentStatus`

**Response**

Returns a [`LnInvoicePaymentStatusPayload!`](broken-reference)

**Arguments**

| Name                                                         | Description |
| ------------------------------------------------------------ | ----------- |
| `input` - [`LnInvoicePaymentStatusInput!`](broken-reference) |             |

**Example**

**Query**

```
subscription lnInvoicePaymentStatus($input: LnInvoicePaymentStatusInput!) {
  lnInvoicePaymentStatus(input: $input) {
    errors {
      ...ErrorFragment
    }
    status
  }
}
```

**Variables**

```
{"input": LnInvoicePaymentStatusInput}
```

**Response**

```
{
  "data": {
    "lnInvoicePaymentStatus": {
      "errors": [Error],
      "status": "PAID"
    }
  }
}
```

### `myUpdates`

**Response**

Returns a [`MyUpdatesPayload!`](broken-reference)

**Example**

**Query**

```
subscription myUpdates {
  myUpdates {
    errors {
      ...ErrorFragment
    }
    me {
      ...UserFragment
    }
    update
  }
}
```

**Response**

```
{
  "data": {
    "myUpdates": {
      "errors": [Error],
      "me": User,
      "update": IntraLedgerUpdate
    }
  }
}
```

### `price`

**Response**

Returns a [`PricePayload!`](broken-reference)

**Arguments**

| Name                                        | Description |
| ------------------------------------------- | ----------- |
| `input` - [`PriceInput!`](broken-reference) |             |

**Example**

**Query**

```
subscription price($input: PriceInput!) {
  price(input: $input) {
    errors {
      ...ErrorFragment
    }
    price {
      ...PriceFragment
    }
  }
}
```

**Variables**

```
{"input": PriceInput}
```

**Response**

```
{
  "data": {
    "price": {
      "errors": [Error],
      "price": Price
    }
  }
}
```
