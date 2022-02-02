require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
dotenv.config();

// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `${process.env.ALCHEMY_URL}`,
      accounts: [`${process.env.ACCOUNT}`]
    }
  }
};
