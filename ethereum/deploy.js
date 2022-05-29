const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const dotenv = require("dotenv").config({ path: "../.env" });
// const compiledFactory = require("./build/CampaignFactory.json");
// assumes we are doing compilation on the fly
// const {interface, bytecode} = require('./compile');
// Instead of compiling on fly let's add the compiled JSOn

// Compiled Contract
const compiledFactory = require("./build/CampaignFactory.json");
// console.log(process.env.MNEMONIC);
// console.log(process.env.RINKEBY_INFURA_ENDPOINT);
const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_INFURA_ENDPOINT);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account address ${accounts[0]}...`);

  // Notice above we were compiling on the fly, in the previous lottery contract
  // Now we are going to parse the already compiled campaignFactory interface
  const parsedInterface = JSON.parse(compiledFactory.interface);

  const result = await new web3.eth.Contract(parsedInterface)
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
  // provider.engine.stop();
};
deploy();
