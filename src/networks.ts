export type HardhatNetworkUrls = {
  rpc: string
  api: string
  browser: string
}

export type HardhatNetwork = {
  name: string
  chainId: number
  urls: HardhatNetworkUrls
  apiKeyIgnored?: boolean
}

export const networks: Readonly<HardhatNetwork[]> = [
  {
    name: "ethereum",
    chainId: 1,
    urls: {
      rpc: `https://ethereum-rpc.publicnode.com`,
      api: "https://api.etherscan.io/api",
      browser: "https://etherscan.io/",
    },
  },
  {
    name: "optimism",
    chainId: 10,
    urls: {
      rpc: `https://mainnet.optimism.io`,
      api: "https://api-optimistic.etherscan.io/api",
      browser: "https://optimistic.etherscan.io/",
    },
  },
  {
    name: "polygon",
    chainId: 137,
    urls: {
      rpc: `https://polygon.gateway.tenderly.co`,
      api: "https://api.polygonscan.com/api",
      browser: "https://polygonscan.com/",
    },
  },
  {
    name: "zksync",
    chainId: 324,
    urls: {
      rpc: "https://mainnet.era.zksync.io",
      api: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
      browser: "https://explorer.zksync.io/",
    },
  },
  {
    name: "dfk-testnet",
    chainId: 335,
    urls: {
      rpc: "https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc",
      api: "https://api.routescan.io/v2/network/testnet/evm/335/etherscan/api",
      browser: "https://335.testnet.snowtrace.io/",
    },
    apiKeyIgnored: true,
  },
  {
    name: "base",
    chainId: 8_453,
    urls: {
      rpc: `https://mainnet.base.org`,
      api: "https://api.basescan.org/api",
      browser: "https://basescan.org/",
    },
  },
  {
    name: "arbitrum",
    chainId: 42_161,
    urls: {
      rpc: `https://arbitrum-one.publicnode.com`,
      api: "https://api.arbiscan.io/api",
      browser: "https://arbiscan.io/",
    },
  },
  {
    name: "avalanche-fuji",
    chainId: 43_113,
    urls: {
      rpc: `https://api.avax-test.network/ext/bc/C/rpc`,
      api: "https://api-testnet.snowscan.xyz/api",
      browser: "https://testnet.snowscan.xyz/",
    },
  },
  {
    name: "avalanche",
    chainId: 43_114,
    urls: {
      rpc: "https://api.avax.network/ext/bc/C/rpc",
      api: "https://api.snowscan.xyz/api",
      browser: "https://snowscan.xyz/",
    },
  },
  {
    name: "dfk",
    chainId: 53_935,
    urls: {
      rpc: "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
      api: "https://api.routescan.io/v2/network/mainnet/evm/53935/etherscan",
      browser: "https://53935.snowtrace.io/",
    },
    apiKeyIgnored: true,
  },
  {
    name: "polygon-amoy",
    chainId: 80_002,
    urls: {
      rpc: `https://rpc-amoy.polygon.technology`,
      api: "https://api-amoy.polygonscan.com/api",
      browser: "https://amoy.polygonscan.com/",
    },
  },
  {
    name: "blast",
    chainId: 81_457,
    urls: {
      rpc: "https://rpc.blast.io",
      api: "https://api.blastscan.io/api",
      browser: "https://blastscan.io",
    },
  },
  {
    name: "base-sepolia",
    chainId: 84_532,
    urls: {
      rpc: `https://sepolia.base.org`,
      api: "https://api-sepolia.basescan.org/api",
      browser: "https://sepolia.basescan.org/",
    },
  },
  {
    name: "arbitrum-sepolia",
    chainId: 421_614,
    urls: {
      rpc: `https://sepolia-rollup.arbitrum.io/rpc`,
      api: "https://api-sepolia.arbiscan.io/api",
      browser: "https://sepolia.arbiscan.io/",
    },
  },
  {
    name: "ethereum-sepolia",
    chainId: 11_155_111,
    urls: {
      rpc: `https://rpc2.sepolia.org`,
      api: "https://api-sepolia.etherscan.io/api",
      browser: "https://sepolia.etherscan.io/",
    },
  },
  {
    name: "optimism-sepolia",
    chainId: 11_155_420,
    urls: {
      rpc: `https://sepolia.optimism.io`,
      api: "https://api-sepolia-optimistic.etherscan.io/api",
      browser: "https://sepolia-optimism.etherscan.io/",
    },
  },
] as const;
