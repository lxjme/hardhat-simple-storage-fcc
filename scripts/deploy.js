// 运行命令：yarn hardhat run scripts/deploy.js

const { ethers, run, network } = require("hardhat");
require("dotenv").config();
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_CHAIN_ID = parseInt(process.env.SEPOLIA_CHAIN_ID);

async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");

    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment();
    const contractAddress = await simpleStorage.getAddress();
    console.log("Deploy success...", contractAddress);

    if (network.config.chainId === SEPOLIA_CHAIN_ID && ETHERSCAN_API_KEY) {
        console.log("Waiting for txes...");
        await simpleStorage.deploymentTransaction().wait(4);
        await verify(contractAddress, []);
    }

    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value is :${currentValue}`);

    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1);
    console.log(`call store() tx's address is : ${transactionResponse.hash}`);

    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated Value is: ${updatedValue}`);
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
