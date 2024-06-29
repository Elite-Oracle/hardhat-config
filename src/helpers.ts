// noinspection JSUnusedGlobalSymbols

import type { HardhatUserConfig, HttpNetworkAccountsUserConfig, NetworksUserConfig } from "hardhat/types";

export const replaceAccounts = (config: HardhatUserConfig, accounts: HttpNetworkAccountsUserConfig) => {
  if (!config.networks) {
    throw new Error("No hardhat networks defined");
  }
  config.networks =
    Object.entries(config.networks)
      .reduce((o, [ name, network ]) => (
        { ...o, [name]: { ...network, accounts } }
      ), {} as NetworksUserConfig);
  return config;
};
