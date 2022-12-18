# Lottery Chain
**Lottery chain** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).


### Demo
## 1. Start local chain
Build node executable file
```
docker run --rm -it \
    -v $(pwd):/lottery \
    -w /lottery \
    golang:1.18.7 \
    make build-with-checksum
```

Build node image
```
docker build -f Dockerfile-ubuntu-prod . -t lotteryd_i

// verify if build success
docker run --rm -it lotteryd_i help
```

Launch docker compose
```
docker compose --project-name lottery-chain-local up
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

## Contribute

Generate mocks for keepers
```
mockgen -source=x/lottery/types/expected_keepers.go -package testutil -destination testutil/mocks/expected_keepers_mock.go
```
