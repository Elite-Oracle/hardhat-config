# @elite-oracle/hardhat-config
A generic Hardhat config with predefined networks and etherscan API key logic

## RPC URLs
All URLs are overrideable via an environment variable of the network name
capitalized with dashes replaced as underscores.
> [!TIP]
> Check the Networks table to see it in action!

## Accounts
Accounts are set, by default, to the value of the `PRIVATE_KEY` environment
variable. if you would like to override the accounts, you can use the included
`replaceAccounts()` helper function.
<details>
  <summary>Example</summary>

  ```js
  import { hardhatConfig, replaceAccounts } from '@elite-oracle/hardhat-config';
  const config = replaceAccounts(hardhatConfig, [ `0xYourPrivateKey` ]);
  export default config;
  ```
</details>

## Networks

| Name             | Chain ID |      RPC URL Override      |           API Key            |
|------------------|:--------:|:--------------------------:|:----------------------------:|
| ethereum         |    1     |     `ETHEREUM_RPC_URL`     |     `ETHERSCAN_API_KEY`      |
| optimism         |    10    |     `OPTIMISM_RPC_URL`     | `OPTIMISM_ETHERSCAN_API_KEY` |
| polygon          |   137    |     `POLYGON_RPC_URL`      |    `POLYGONSCAN_API_KEY`     |
| zksync           |   324    |      `ZKSYNC_RPC_URL`      |       `ZKSYNC_API_KEY`       |
| dfk-testnet      |   335    |   `DFK_TESTNET_RPC_URL`    |             N/A              |
| base             |   8453   |       `BASE_RPC_URL`       |      `BASESCAN_API_KEY`      |
| arbitrum         |  42161   |     `ARBITRUM_RPC_URL`     |      `ARBISCAN_API_KEY`      |
| avalanche-fuji   |  43113   |  `AVALANCHE_FUJI_RPC_URL`  |         Uses mainnet         |
| avalanche        |  43114   |    `AVALANCHE_RPC_URL`     |      `SNOWSCAN_API_KEY`      |
| dfk              |  53935   |       `DFK_RPC_URL`        |             N/A              |
| polygon-amoy     |  80002   |   `POLYGON_AMOY_RPC_URL`   |   `DFK_SNOWTRACE_API_KEY`    |
| blast            |  81457   |      `BLAST_RPC_URL`       |     `BLASTSCAN_API_KEY`      |
| base-sepolia     |  84532   |   `BASE_SEPOLIA_RPC_URL`   |         Uses mainnet         |
| arbitrum-sepolia |  421614  | `ARBITRUM_SEPOLIA_RPC_URL` |         Uses mainnet         |
| ethereum-sepolia | 11155111 | `ETHEREUM_SEPOLIA_RPC_URL` |         Uses mainnet         |
| optimism-sepolia | 11155420 | `OPTIMISM_SEPOLIA_RPC_URL` |         Uses mainnet         |
