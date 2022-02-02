const hre = require("hardhat");
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
const dotenv = require('dotenv');
dotenv.config();

const main = async () => {

  const contractName = argv['contractName'];
  const contractArguments = argv["_"];

  const ContractTemplate = await hre.ethers.getContractFactory(contractName); 
  const deployedContract = await ContractTemplate.deploy( ...contractArguments );

  await deployedContract.deployed();

  console.log(`${contractName} deployed to: ${deployedContract.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();