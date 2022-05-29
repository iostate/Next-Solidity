const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
const outputPath = path.resolve(__dirname, "..", "compiled");

// removes everything inside this directory before starting
fs.removeSync(buildPath);

// path to campaign
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source).contracts;

// Ensure that the build folder is present
fs.ensureDirSync(buildPath);
// fs.ensureDirSync(outputPath);

console.log("Successfully compiled contracts into " + campaignPath.toString());

for (let contract in output) {
  fs.outputJsonSync(path.resolve(buildPath, contract.replace(":", "") + ".json"), output[contract]);
}
