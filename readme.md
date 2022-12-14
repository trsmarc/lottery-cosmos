# Lottery Chain
**Lottery chain** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Contribute

Generate mocks for keepers
```
mockgen -source=x/lottery/types/expected_keepers.go -package testutil -destination testutil/mocks/expected_keepers_mock.go
```


## Usage

Buy lottery
```
Command:
lotteryd tx lottery buy-lottery <fee> <bet-size> --from <account-name>

Example:
lotteryd tx lottery buy-lottery 5token 20token --from client1
```

Query token balance of a client
```

Command:
lotteryd q bank balances $(lotteryd keys show <account-name> -a)

Example:
lotteryd q bank balances $(lotteryd keys show client1 -a)
```

Query lottery bet
```
lotteryd q lottery list-bet
```

Query lottery winner record
```
lotteryd q lottery list-lottery-record
```

Action
```
Command:
Example:
```