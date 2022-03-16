import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  // first param is ABI
  JSON.parse(CampaignFactory.interface),
  "0xE74A5e4c4e8cF290E1eA29C97CA0C55bDf76850e"
);

export default instance;
