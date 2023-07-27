# Staging Environment

The continuous integration system of the Galoy stack is an organic part of the deployment process. All changes are first passed through and being tested in the staging environment running on signet.\
\
More info about testing on signet: [github.com/GaloyMoney/charts/blob/main/dev/signet.md](https://github.com/GaloyMoney/charts/blob/main/dev/signet.md)

The endpoints are public and can be used to test the new functions or integrations before using real sats:

* API endpoint: [api.staging.galoy.io/graphql](https://api.staging.galoy.io/graphql)
* Web wallet: [wallet.staging.galoy.io](https://wallet.staging.galoy.io/)
* Galoy Pay endpoint with the POS app: [pay.staging.galoy.io](https://pay.staging.galoy.io/)
* POS app of the username `test`: [pay.staging.galoy.io/test](https://pay.staging.galoy.io/merchant/test)
* Printable paycode of the username `test`: [pay.staging.galoy.io/test/print](https://pay.staging.galoy.io/test/print?memo=from%20dev.galoy.io)
* The Bitcoin Beach Wallet app can be connected to the staging environment if you tap 3 times on the build number in settings.
* the backing lightning nodes:
  * [03bb03bb6e389355834c9fc7dfeb849dab17d9940d955f6dba0c27e84c88ca4ab8](https://mempool.space/signet/lightning/node/03bb03bb6e389355834c9fc7dfeb849dab17d9940d955f6dba0c27e84c88ca4ab8)
  * [024e679c1a77143029b806f396f935fa6cd0744970f412667adfc75edbbab54d7a](https://mempool.space/signet/lightning/node/024e679c1a77143029b806f396f935fa6cd0744970f412667adfc75edbbab54d7a)

