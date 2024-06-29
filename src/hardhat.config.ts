import type { HardhatUserConfig, HttpNetworkAccountsUserConfig, NetworksUserConfig } from "hardhat/types";
import { networks } from "./networks";

const useEthers = process.env.USE_ETHERS === "true";
const pk = process.env.PRIVATE_KEY || "";
const accounts: HttpNetworkAccountsUserConfig = [ pk.replace(useEthers ? /^0x/ : "", "") ];

export const hardhatConfig: HardhatUserConfig & Record<string, any> = {
  solidity: {
    compilers: [ { version: "0.8.25", settings: { evmVersion: "paris", optimizer: { enabled: true, runs: 200 } } } ],
  },
  networks: networks.reduce((o, n) => (
    { ...o, [n.name]: { url: n.urls.rpc, chainId: n.chainId, accounts } }
  ), {} as NetworksUserConfig),
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: networks.reduce((o, n) => {
      let prefix = new URL(n.urls.browser).host.split(".")
        .slice(0, -1)
        .join("_")
        .replace("-", "_")
        .replace(/^(sepolia|testnet|amoy|explorer)_/i, "")
        .replace(/optimistic/i, "optimism")
        .replace(n.chainId.toString(), n.name)
        .toUpperCase();
      return {
        ...o,
        [n.name]: n.apiKeyIgnored ? "not-needed" : process.env[`${prefix}_API_KEY`],
      };
    }, {}),
    customChains: networks.map((network) => (
      {
        network: network.name,
        chainId: network.chainId,
        urls: {
          apiURL: process.env[`${network.name.toUpperCase().replace(/-/, "_")}_RPC_URL`] || network.urls.api,
          browserURL: network.urls.browser,
        },
      }
    )),
  },
};
