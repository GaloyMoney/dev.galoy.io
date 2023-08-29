---
description: >-
  Galoy is an open source banking platform enabling any organization to
  launch a community bank on top of Bitcoin and Lightning.
---

# Galoy Developer Documentation

## Overview of Galoy

The Galoy core banking platform includes the parts necessary to launch a community bank on Bitcoin and Lightning. It is designed to be modular and extensible, so that it can be customized to meet the needs of any community or organization.

### Backend

* **[Public API](/products/public-api)** – interacts with the bitcoin and accounting layers to enable sending, receiving and holding balances
* **[Stablesats](/products/stablesats)** – service for implementing fiat hedging strategies via supported exchanges; enables the provision of synthetic USD to provide dollar-like stability without stablecoins
* **[Bria](/products/bria)** - a service for transaction batching and onchain liquidity management
* **[Galoy CLI](/products/galoy-cli)** - a Command Line Interface (CLI) client for interacting with Galoy Backend

### End-user and merchant experiences

* **[Mobile wallet](https://github.com/GaloyMoney/galoy-mobile)** – simple end user experience enables send/receive onchain and Lightning. Mobile wallet includes educational onboarding quiz & merchant map.
* **[Galoy Pay](https://github.com/GaloyMoney/galoy-pay)** – web application end users can share online or display in person to receive payments to their account.
* **[Web wallet](https://github.com/GaloyMoney/web-wallet)** – web application for sending and receiving bitcoin over onchain, lightning and intraledger. It can be customized and used by any community or organization.

### Administrator experiences

* **Dashboard** – enables monitoring usage and performance of the instance
* **Admin panel** – web application which lets a support team manage users and transactions on their galoy instance.

## Getting Started
* [Staging Environment](/deployment/staging-environment)
* [Deployment](/deployment/)

## API Reference
Dive a little deeper and start exploring our API reference to get an idea of everything that's possible with the API:
* [Public API Reference ](https://dev.galoy.io/public-api-reference.html)
* [Admin API Reference](https://dev.galoy.io/admin-api-reference.html)
