# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```


## 问题1

```shell
当使用hardhat-gas-reporter时,执行  yarn hardhat test之后出现以下报错：

	>>>>> WARNING (hardhat-gas-reporter plugin) <<<<<<
	Failed to get token price from https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&CMC_PR
	O_API_KEY=489be24b-f533-4f3a-8f7d-ed057d8518d8&convert=USD
	Error was: connect ETIMEDOUT 118.107.180.216:443
	Reported price data is missing or incorrect
	* Being rate limited? See the Etherscan API key options in the docs.
	* Set the "offline" option to "true" to suppress these warnings
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	>>>>> WARNING (hardhat-gas-reporter plugin) <<<<<<
	Failed to get gas price from https://api.etherscan.io/api?module=proxy&action=eth_gasPrice
	Error was: connect ECONNREFUSED 108.160.170.44:443
	Reported price data is missing or incorrect


解决方案：
	在执行 yarn hardhat test 之前，先输入：

	set HTTP_PROXY=你电脑上的代理地址
	set HTTPS_PROXY=你电脑上的代理地址

```
