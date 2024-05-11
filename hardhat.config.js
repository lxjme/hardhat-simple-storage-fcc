require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

// 验证合约时用到
// const { ProxyAgent, setGlobalDispatcher } = require("undici");
// const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
// setGlobalDispatcher(proxyAgent);

// sepolia
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_CHAIN_ID = parseInt(process.env.SEPOLIA_CHAIN_ID);
// ganache
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY;
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL;

//
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [SEPOLIA_PRIVATE_KEY],
            chainId: SEPOLIA_CHAIN_ID,
        },
        ganache: {
            url: GANACHE_RPC_URL,
            accounts: [GANACHE_PRIVATE_KEY],
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: false,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    solidity: "0.8.24",
};
