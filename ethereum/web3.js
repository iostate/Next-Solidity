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
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/749004f5a9b84dae8b7adb6bc84b6433"
  );
  web3 = new Web3(provider);
}
export default web3;
