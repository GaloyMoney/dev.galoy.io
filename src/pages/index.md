---
description: >-
  Galoy is an open source banking platform enabling any organization to
  launch a community bank on top of Bitcoin and Lightning.
---

# Galoy Developer Documentation

## Overview of Galoy

The Galoy core banking platform includes the parts necessary to launch a community bank on Bitcoin and Lightning. It is designed to be modular and extensible, so that it can be customized to meet the needs of any community or organization.

:::tip
[Join the Galoy Workspace](https://chat.galoy.io) and say hello in the Town Square – there is a community of devs happy to help you get up and running.
:::

### Backend

* **[Blink Core](products/blink-core)** – interacts with the bitcoin and accounting layers to enable sending, receiving and holding balances.
Check out the [dev.blink.sv/api](https://dev.blink.sv) for an interactive tutorial to get started with our hosted instance.
* **[Stablesats](products/stablesats)** – service for implementing fiat hedging strategies via supported exchanges; enables the provision of synthetic USD to provide dollar-like stability without stablecoins.
* **[Bria](products/bria)** - a service for transaction batching and onchain liquidity management.

### Apps

#### End-user and merchant experiences

* **[Mobile Wallet](https://github.com/GaloyMoney/blink-mobile)** – simple end user experience enables send/receive onchain and Lightning. Mobile wallet includes educational onboarding quiz & merchant map.
* **[Blink Pay](https://github.com/GaloyMoney/blink-pay)** – web application end users can share online or display in person to receive payments to their account.

#### Administrator experiences

* **Dashboard** – enables monitoring usage and performance of the instance
* **Admin panel** – web application which lets a support team manage users and transactions on their galoy instance.

## Getting started

* [Hosted API](https://dev.blink.sv/api)
* [Deployment](/deployment/)

## API Reference

Dive a little deeper and start exploring our API reference to get an idea of everything that's possible with the API:
* [Blink public API reference](https://dev.galoy.io/public-api-reference.html)
* [Blink admin API reference](https://dev.galoy.io/admin-api-reference.html)
