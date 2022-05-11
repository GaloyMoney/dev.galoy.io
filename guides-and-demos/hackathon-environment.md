# Hackathon Environment

To help you understand the types of things you can do with the Galoy API, we have prepared wallets pre-loaded with some Satoshis for all hackathon participants to use. You can use your Galoy-managed wallets to send money to any BTC wallet. You can also make payment requests and use them to receive money from any BTC wallet.

The Satoshis in your test wallets are yours, and you can withdraw them to your own BTC wallet. Yes you heard that right, FREE CORN 🌽🌽🌽.

Let's get started.

### Pound that star button on Github ⭐ <a href="#pound-that-star-button-on-github" id="pound-that-star-button-on-github"></a>

Go to [GaloyMoney on Github](https://github.com/GaloyMoney/galoy) and star the repo on the top right of your screen. ⭐⭐⭐

This way you can easily find it again later and show other devs that GaloyMoney is active and worth looking into.

### Getting and using a JWT token <a href="#getting-and-using-a-jwt-token" id="getting-and-using-a-jwt-token"></a>

Most of the GraphQL operations you will be making during the hackathon will require user authentication. We have pre-seeded the hackathon environment with accounts you can use. To get access to an account, we will issue JWT tokens to participants through our Slack channel [#hackathon](https://galoymoney-workspace.slack.com/archives/C0344LPRUMU). Please join the channel and message "token", and one of our team will send a JWT token to you via DM.

Once you have a valid JWT token, you'll need to define the `token` environment variable in the [explorer](https://studio.apollographql.com/public/galoy-hackathon/explorer?variant=current) settings (the cog icon):

![env-variables-image](https://github.com/GaloyMoney/hackathon/raw/main/env-variables.png)

```
{
  "token": "JWT_TOKEN_HERE"
}
```

That makes all GraphQL operations you test in the explorer include the required `Authorization` header.

### Getting your account details <a href="#getting-your-account-details" id="getting-your-account-details"></a>

Let's start with a query to get some account details (which you'll need later on in this tutorial):

```
query Me {
  me {
    defaultAccount {
      wallets {
        id
        walletCurrency
        balance
      }
    }
  }
}
```

You should see that your account has 2 wallets available, each with a pre-funded balance:

* one BTC wallet, in **Satoshis**
* one USD wallet, in **USD cents**

_Keep a note of your wallet IDs as you will need them for later operations._

The Galoy API supports sending and receiving payments that are denominated in BTC (satoshis) or in USD (cents). In this tutorial, we'll go over examples of how to do the latter.

You can send USD-denominated payments over lightning or directly to users of the Galoy API. These direct payments are settled immediately on the Galoy backend. We call them **intraledger** payments. Unlike lightning and onchain payments, intraledger payments have no fees. In the following examples, if both senders and receivers are users of the Galoy API, the payment will be settled as an intraledger payment.

### Sending USD over lightning <a href="#sending-usd-over-lightning" id="sending-usd-over-lightning"></a>

You can send USD over lightning to either a standard lightning invoice (with a fixed amount of Satoshis), or to a lightning invoice that does not specify an amount. For the latter, the payer (you in this example) can pay any amount. This is helpful for cases like tipping or donating. In the Galoy API, this flexible invoice is called a "no amount invoice".

_Note that not all lightning wallets support the "no amount" invoice concept._

#### Paying a no amount invoice using USD <a href="#paying-a-no-amount-invoice-using-usd" id="paying-a-no-amount-invoice-using-usd"></a>

Let's say someone requested a payment from you over the lightning network and gave you a "no amount" payment request string.

Or, you can generate one yourself using a lightning wallet of your choosing. If you don't already have one then you could try [https://coinos.io/](https://coinos.io) or [https://www.walletofsatoshi.com/](https://www.walletofsatoshi.com) (mobile). Copy the payment request string and use it in the following mutation to send any USD amount to your wallet.

```
mutation LnNoAmountUsdInvoicePaymentSend($input: LnNoAmountUsdInvoicePaymentInput!) {
  lnNoAmountUsdInvoicePaymentSend(input: $input) {
    errors {
      message
    }
    status
  }
}
```

To execute this mutation, you need to define the following variables (bottom pane in the explorer):

```
{
  "input": {
    "walletId": "YOUR_USD_WALLET_ID_HERE",
    "paymentRequest": "NO_AMOUNT_LIGHTNING_INVOICE_PAYMENT_REQUEST_HERE",
    "amount": AMOUNT_TO_SEND_IN_USD_CENTS,
    "memo": "OPTIONAL_MEMO_INTERNAL_TO_GALOY"
  }
}
```

Use the USD wallet ID from the previous `Me` query response.

If the payment was not successful, the response will include one or more errors for you to understand what went wrong.

If the payment was successful, the mutation response will have a `SUCCESS` value in the status field and the invoice you copied should show as paid in your wallet. You can also run the `Me` query again with extra fields to check the transactions sent from your account.

```
query Me($first: Int) {
  me {
    defaultAccount {
      wallets {
        id
        walletCurrency
        balance
        transactions(first: $first) {
          edges {
            node {
              settlementAmount
              settlementPrice {
                currencyUnit
              }
              status
              memo
            }
          }
        }
      }
    }
  }
}
```

Remember to include the variables this time as the transactions field is paginated so requires a number to represent how many transactions to return. I've populated the example below with 5 but you can change it if you want.

```
{
  "first": 5
}
```

#### Paying a fixed amount invoice using USD <a href="#paying-a-fixed-amount-invoice-using-usd" id="paying-a-fixed-amount-invoice-using-usd"></a>

If you generate an invoice with a fixed amount in your wallet, you can use the following mutation to pay it from your USD wallet:

```
mutation lnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
  lnInvoicePaymentSend(input: $input) {
    errors {
      message
    }
    status
  }
}
```

To execute this mutation, you need to define the following variables (bottom pane in the explorer):

```
{
  "input": {
    "walletId": "YOUR_USD_WALLET_ID_HERE",
    "paymentRequest": "FIXED_AMOUNT_LIGHTNING_INVOICE_PAYMENT_REQUEST_HERE",
    "memo": "OPTIONAL_MEMO_INTERNAL_TO_GALOY"
  }
}
```

### Subscribing to updates <a href="#subscribing-to-updates" id="subscribing-to-updates"></a>

The Galoy API supports a few subscription operations where you can get immediate updates from the server when there is new data of interest. For example, you can use the following subscription operation to get BTC price updates and updates on any lightning transactions under your account:

```
subscription MyUpdates {
  myUpdates {
    errors {
      message
    }
    update {
      ... on Price {
        base
        offset
        currencyUnit
        formattedAmount
      }
      ... on LnUpdate {
        paymentHash
        status
        walletId
      }
    }
  }
}
```

Everytime there is a price update, this subscription operation will push a response containing the new price data. It'll also push a response everytime a lightning invoice under your account gets paid.

_**Note:** Subscriptions are designed to run in the background and receive updates. Once you have started the subscription you can leave it open so you can see the real time updates from the next example_

### Requesting USD over lightning <a href="#requesting-usd-over-lightning" id="requesting-usd-over-lightning"></a>

Using one of the following mutations, you can generate a USD lightning invoice and send it to someone as a payment request:

#### Create USD lightning invoice <a href="#create-usd-lightning-invoice" id="create-usd-lightning-invoice"></a>

```
mutation LnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {
  lnUsdInvoiceCreate(input: $input) {
    errors {
      message
    }
    invoice {
      paymentRequest
      paymentHash
    }
  }
}
```

To execute this mutation, you need to define the following variables:

```
{
  "input": {
    "walletId": "YOUR_USD_WALLET_ID_HERE",
    "amount": AMOUNT_TO_RECEIVE_IN_USD_CENTS,
    "memo": "OPTIONAL_NOTE_FOR_THE_SENDER"
  }
}
```

This operation converts the USD cent amount you specify into the equivalent satoshis and creates a lightning invoice with that amount.

\_**Note:** this lightning invoice expires after 2 minutes. The short expiry time is enforced because there is a USD/BTC exchange rate associated with the amount. When the invoice is paid the recipient is credited the originally requested USD amount.\_

Once this invoice is paid the subscription should have a response which looks like this:

```
{
  "data": {
    "myUpdates": {
      "errors": [],
      "update": {
        "paymentHash": "INVOICE_PAYMENT_HASH",
        "status": "PAID",
        "walletId": "YOUR_USD_WALLET_ID"
      }
    }
  }
}
```

#### Create no amount lightning invoice for a USD wallet <a href="#create-no-amount-lightning-invoice-for-a-usd-wallet" id="create-no-amount-lightning-invoice-for-a-usd-wallet"></a>

As stated previously, it is possible to create a **payment request** which does not include an amount. This allows whoever is paying the **payment request** to set the amount. Below is an example of how we can create a no amount lightning invoice which can be paid from any LN wallet and received to either a BTC or USD wallet on the Galoy backend.

```
mutation LnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {
  lnNoAmountInvoiceCreate(input: $input) {
    errors {
      message
    }
    invoice {
      paymentRequest
      paymentHash
    }
  }
}
```

To execute this mutation, you need to define the following variables:

```
{
  "input": {
    "walletId": "YOUR_USD_WALLET_ID_HERE",
    "memo": "OPTIONAL_NOTE_FOR_THE_SENDER"
  }
}
```

#### Setting a username <a href="#setting-a-username" id="setting-a-username"></a>

The username serves two purposes.

1. Allows users to make payments to each other internally to this environment using just the username.
2. Creates a lightning address which can be used to pay over the lightning network using the lnurl spec.

```
mutation UserUpdateUsername ($userUpdateUsernameInput: UserUpdateUsernameInput!) {
  userUpdateUsername(input: $userUpdateUsernameInput) {
    errors {
      message
    }
    user {
      id
      username
    }
  }
}
```

Remember to populate the variables pane at the bottom of the explorer window before you run the mutation or you will get errors. As an example:

```
{
  "userUpdateUsernameInput": {
    "username": "CHANGEME"
  }
}
```

### Creating a USD invoice on behalf of a Galoy API user <a href="#creating-a-usd-invoice-on-behalf-of-a-galoy-api-user" id="creating-a-usd-invoice-on-behalf-of-a-galoy-api-user"></a>

#### Getting default wallet ID for a username <a href="#getting-default-wallet-id-for-a-username" id="getting-default-wallet-id-for-a-username"></a>

You can generate a USD lightning invoice on behalf of any Galoy API user (including yourself). You'll first need to use a query operation to get the wallet ID for the recipient. You can use the following query for that:

```
query accountDefaultWallet($username: Username!) {
  accountDefaultWallet(username: $username, walletCurrency: USD) {
    id
  }
}
```

You'll need the following variable for this query:

```
{
  "username": "RECIPIENT_USERNAME_HERE"
}
```

This responds with the USD wallet ID value, which you'll need to use in the next operation.

You can now use the following mutation to create a lightning invoice to request a payment on behalf of the recipient:

```
mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {
  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {
    errors {
      message
    }
    invoice {
      paymentRequest
      paymentHash
    }
  }
}
```

To execute this mutation, you need to include the following variables:

```
{
  "input": {
    "recipientWalletId": "THE_USD_WALLET_ID_FOR_THE_RECIPIENT",
    "amount": AMOUNT_TO_RECEIVE_IN_USD_CENTS,
    "memo": "OPTIONAL_NOTE_FOR_THE_SENDER"
  }
}
```

This operation converts the USD cent amount you specify into the equivalent satoshis and creates a lightning invoice with that satoshis amount.

\_**Note:** this lightning invoice expires after 2 minutes. The short expiry time is enforced because there is a USD/BTC exchange rate associated with the amount. When the invoice is paid the recipient is credited the originally requested USD amount.\_

### More examples <a href="#more-examples" id="more-examples"></a>

#### Creating a standard lightning invoice <a href="#creating-a-standard-lightning-invoice" id="creating-a-standard-lightning-invoice"></a>

You can use our API to create a standard BTC bolt11 lightning invoice using the below mutation.

```
mutation lnInvoiceCreate($input: LnInvoiceCreateInput!) {
  lnInvoiceCreate(input: $input) {
    invoice {
      paymentRequest
      paymentHash
      paymentSecret
      satoshis
    }
    errors {
      message
    }
  }
}
```

Remember to include the variables for the mutation input in the pane located at the bottom of the window. As an example:

```
{
  "input": {
    "walletId": "YOUR_BTC_WALLET_ID",
    "amount": AMOUNT_TO_RECEIVE_IN_SATS,
    "memo": "OPTIONAL_NOTE_FOR_THE_SENDER"
  }
}
```

* `walletId`: use the BTC wallet ID that you took a note of from the initial `Me` query.
* `amount`: choose an amount for the invoice.
* `memo`: Optionally include a memo (message string).

If you have a lightning wallet with available satoshis you can pay the invoice by using the returned `paymentRequest` if you want. Otherwise you can paste the `paymentRequest` into [lndecode](https://lndecode.com) to see the details of the invoice which has been generated for you.

#### Sending BTC to an external wallet <a href="#sending-btc-to-an-external-wallet" id="sending-btc-to-an-external-wallet"></a>

You can send any BTC amount to another wallet over lightning or onchain. Here's the mutation you need to do it over lightning:

```
mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
  lnInvoicePaymentSend(input: $input) {
    errors {
      message
    }
    status
  }
}
```

To execute this mutation, you need to include the following variables:

```
{
  "input": {
    "walletId": "YOUR_WALLET_ID_TO_PAY_FROM",
    "paymentRequest": "THE_LIGHTNING_INVOICE_STRING",
    "memo": "OPTIONAL_MEMO_INTERNAL_TO_GALOY"
  }
}
```

The API supports sending to a lightning invoice with a predefined amount using the `LnInvoicePaymentSend` or lightning invoice with no amount specificed using `lnNoAmountInvoicePaymentSend`. Both of these mutations return a status field indicating the success or failure of the transaction.\
