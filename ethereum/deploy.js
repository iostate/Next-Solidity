const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const dotenv = require("dotenv").config({ path: "../.env" });
// const compiledFactory = require("./build/CampaignFactory.json");
// assumes we are doing compilation on the fly
// const {interface, bytecode} = require('./compile');
// Instead of compiling on fly let's add the compiled JSOn

const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  // "https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q"
  "https://rinkeby.infura.io/v3/749004f5a9b84dae8b7adb6bc84b6433"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  // Notice above we were compiling on the fly, in the previous lottery contract
  // Now we are going to parse the already compiled campaignFactory interface
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  // console.log(interface)
  // ^^ no longer needed/working
  console.log("Contract deployed to", result.options.address);
  // This is new...
  provider.engine.stop();
};
deploy();
