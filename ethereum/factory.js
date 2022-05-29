import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  // first param is ABI
  JSON.parse(CampaignFactory.interface),
  "0x180FDcBCc61eff321081AAdfBb1cD80C244AE7d8"
);

export default instance;
