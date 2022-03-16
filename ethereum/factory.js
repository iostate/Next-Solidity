import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  // first param is ABI
  JSON.parse(CampaignFactory.interface),
  "0x1E5619a68eA9c06C8BE63940989597dc7A3c5759"
);

export default instance;
