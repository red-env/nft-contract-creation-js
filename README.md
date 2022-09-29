# nft-contract-creation-js

Simple code in javascript to create, deploy and test an ERC721 smart contract. This example is able to deploy and test the smart contract on *ROPSTEIN* testnet.

## files
    .
    ├── contracts                       # truffle directory containing solidity contracts
    │   ├── ERC721.sol                  # ERC721 contract
    │   ├── IERC721.sol                 # Main interface implemented by ERC721 contract that provides standard methods
    │   ├── IERC721Metadata.sol         # Interface able to add metadata to ERC721 standard contract
    │   ├── IERC721TokenReceiver.sol    # If the receiver is a contract should implement this interface to handle the transfer method
    │   └── Migrations.sol              # Truffle migration contract
    ├── migrations                      # Truffle migration directory
    │   ├── 1_initial_migration.js      # Migration of Migrations contract already implemented in truffle
    │   └── 2_ERC721.js                 # File able to migrate the ERC721 contract
    ├── test                            # Truffle test directory
    │   └── ERC721_test.js              # ERC721 test file
    ├── deploy_and_test.sh              # Script that provides commands to deploy and test ERC721 contract
    ├── .env_test                       # File test able to provide environment variables
    ├── package.json                    # Json npm file that keep track of project information and dependencies
    ├── truffle-config.json             # Truffle file able to manage configuration information to deploy or test smart contracts
    ├── docker-composer.yml
    ├── Dockerfile
    └── README.md

## prerequisite
To run the js code should be installed on machine
- docker

## before running
Should be created a new file **.env** in main directory with the same key of *.env_test*. The connection with the nodes of the blockchain is possible without creating a dedicated node passing through [infura](https://infura.io/dashboard) that is able to do as a proxy. After a registration it provides a personal link to each user to access on web3 services.
```
INFURA_PROJECT_ID=  <- infura id available on the website
ACCOUNT_ADDRESS=    <- user account address
PRIVATE_KEY=        <- user account private key
```
## run
```
docker-compose up
```

## locally
It is possible to run it also in local machine installing
- node
- npm
- truffle
and running
```
npm install
./deploy_and_test.sh
```
Shuld be run truffle commands on terminal:
- deploy
```
truffle deploy --network ropsten --reset
```
- test
```
truffle test --network ropsten
```
