---
id: postman
title: Postman collection
slug: /api/postman
---
## Online docs

To browse the API requests in multiple languages visit the Galoy API Postman collection documentation at:
[documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd](https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd)

or go ahead and fork the collection with the staging environment preset to your Postman workspace:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/29391384-67b79565-f9ed-4ff7-800c-10eabfd0fc38?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29391384-67b79565-f9ed-4ff7-800c-10eabfd0fc38%26entityType%3Dcollection%26workspaceId%3Db8a32fb0-cb8e-4323-934f-c100c6ec02b7#?env%5Bgaloy-staging%5D=W3sia2V5IjoicHJvdG9jb2wiLCJ2YWx1ZSI6Imh0dHBzIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiaHR0cHMiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiZG9tYWluIiwidmFsdWUiOiJhcGkuc3RhZ2luZy5nYWxveS5pbyIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6ImFwaS5zdGFnaW5nLmdhbG95LmlvIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6InBvcnQiLCJ2YWx1ZSI6IjQ0MyIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6IjQ0MyIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJjdXJyZW5jeSIsInZhbHVlIjoiQlRDIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiQlRDIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InBob25lIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH0seyJrZXkiOiJjb2RlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NX0seyJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo2fSx7ImtleSI6IndhbGxldElkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjd9LHsia2V5Ijoid2FsbGV0SWRVc2QiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo4fSx7ImtleSI6IndhbGxldElkQnRjIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6OX0seyJrZXkiOiJzaWduZXQtcDJwa2gtYWRkcmVzcyIsInZhbHVlIjoibXY0cm55WTNTdTVnamNETnpiTUxLQlFrQmljQ3RIVXRGQiIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6Im12NHJueVkzU3U1Z2pjRE56Yk1MS0JRa0JpY0N0SFV0RkIiLCJzZXNzaW9uSW5kZXgiOjEwfSx7ImtleSI6InNpZ25ldC1wMnNoLWFkZHJlc3MiLCJ2YWx1ZSI6IjJOR1lIZm9OVXRlckt2dUxWeVZVNW5wbUpQS21Cd3RvTXp1IiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiMk5HWUhmb05VdGVyS3Z1TFZ5VlU1bnBtSlBLbUJ3dG9NenUiLCJzZXNzaW9uSW5kZXgiOjExfSx7ImtleSI6InNpZ25ldC1zZWd3aXRWMC1hZGRyZXNzIiwidmFsdWUiOiJ0YjFxNzk2NzQwamFleXBwd3NkZnRlNWpxZ2F5NXlxdnl2a3NtdXhrNmciLCJlbmFibGVkIjp0cnVlLCJzZXNzaW9uVmFsdWUiOiJ0YjFxNzk2NzQwamFleXBwd3NkZnRlNWpxZ2F5NXlxdnl2a3NtdXhrNmciLCJzZXNzaW9uSW5kZXgiOjEyfSx7ImtleSI6InR3b0ZBU2VjcmV0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTN9LHsia2V5IjoiZW1haWxBZGRyZXNzIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTR9LHsia2V5IjoiZW1haWxMb2dpbklkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTV9LHsia2V5IjoiZW1haWxDb2RlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTZ9XQ==)

## `staging` and `mainnet` API access

Follow the links to register and get an authentication token:
* [Start with Blink](/api)
* [Get an auth token](/api/auth)

## Local development

We've included the following files here that can be imported into Postman to get up-and-running with the Galoy API.

### Collection

* [galoy_graphql_main_api.postman_collection.json](https://dev.galoy.io/galoy_graphql_main_api.postman_collection.json): the collection of queries and mutations

### Environment variables

* [galoy-dev.postman_environment.json](https://dev.galoy.io/galoy-dev.postman_environment.json): environment variables to hit our testing local setup
* [galoy-staging.postman_environment.json](https://dev.galoy.io/galoy-staging.postman_environment.json): environment variables to hit our deployed staging with signet bitcoin
* [galoy-mainnet.postman_environment.json](https://dev.galoy.io/galoy-mainnet.postman_environment.json): environment variables to hit our deployed Blink production environment with mainnet bitcoin

### Usage

* Download Postman: [www.postman.com](https://www.postman.com/) or use the web version: [web.postman.co](https://web.postman.co/)
* Import the collection and the respective environment variable files into Postman.

### Local `dev` API access
For the local `dev` environment
* clone the [galoy repo](https://github.com/GaloyMoney/galoy) and install the dependencies as in [github.com/GaloyMoney/galoy/blob/main/DEV.md#setup](https://github.com/GaloyMoney/galoy/blob/main/DEV.md#setup)
* use the following commands to start hosting the API locally:
  ```
  $ TEST="01|02" make reset-integration
  $ make start-main
  ```
* You can then use the mutations in the `login flow` folder to login as one of the test accounts defined in the `default.yaml` file (one is already auto-populated).
