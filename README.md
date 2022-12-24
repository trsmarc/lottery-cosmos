# Lottery

**Lottery** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Demo

**Launch a local chain** with the validator-node and client app using docker compose

```
 docker compose --project-name lottery-chain-local up -d --build    
```

## Usage

Go checkout http://localhost:5173 to start a simulation and use pre-build binary file **lotteryd** command to query current state on network or submit transaction.

**Build executable file**
```
make build
cd build
```

**Using a pre-build binary file**
```
lottery transactions subcommands

Usage:
  lotteryd tx lottery [flags]
  lotteryd tx lottery [command]

Available Commands:
  buy-lottery Broadcast message buy-lottery
  create-bet  Create a new bet
  delete-bet  Delete a bet
  update-bet  Update a bet
```

```
Querying commands for the lottery module

Usage:
  lotteryd query lottery [flags]
  lotteryd query lottery [command]

Available Commands:
  list-bet            list all bet
  list-lottery-record list all lottery-record
  params              shows the parameters of the module
  show-bet            shows a bet
  show-lottery-record shows a lottery-record
```

**Examples:**

Buy lottery

```
Command:
./lotteryd tx lottery buy-lottery <fee> <bet-size> --from <account-name>

Example:
./lotteryd tx lottery buy-lottery 5token 20token --from client-1
```

Query token balance of a client

```
Command:
./lotteryd q bank balances $(./lotteryd keys show <account-name> -a)

Example:
./lotteryd q bank balances $(./lotteryd keys show client-1 -a)
```

Query lottery bet

```
./lotteryd q lottery list-bet
```

Query lottery winner record

```
./lotteryd q lottery list-lottery-record
```

## Contribute

Generate mocks for keepers

```
make mocks
```
