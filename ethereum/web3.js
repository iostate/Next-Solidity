import Web3 from "web3";

// const web3 = new Web3(window.web3.currentProvider);
// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);

let web3;

// if (typeof window !== "undefined" && typeof window.web !== "undefined") {
//   // We are in the browser & metamask is running
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   //
// }

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({
    method: "eth_requestAccounts",
  });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/564c9e0b4a174a3f947a399674a84827");
  web3 = new Web3(provider);
}
export default web3;
