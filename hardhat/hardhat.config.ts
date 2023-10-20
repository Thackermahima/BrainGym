require("@nomicfoundation/hardhat-toolbox");
const QUICKNODE_HTTP_URL = process.env.NEXT_PUBLIC_REACT_APP_QUICK_NODE_HTTP_URL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
console.log('q node url', QUICKNODE_HTTP_URL);
console.log('p key', PRIVATE_KEY);

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     mumbai: {
      
//       // url: QUICKNODE_HTTP_URL,
//       url: "https://lively-spring-market.matic-testnet.quiknode.pro/d5245b604fd92b7050a13e1f9383f11b4c546438/",
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };


// scroll sepolia config
module.exports = {
  solidity: "0.8.20",
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/" || "",
      accounts:
      [PRIVATE_KEY],
    },
  },
};


// const config: HardhatUserConfig = {
//   solidity: "0.8.20", // solidity version
//   networks: {
//       mantleTest: {
//       url: "https://rpc.testnet.mantle.xyz", // testnet
//       accounts: [PRIVATE_KEY],
//       }
//   },
//   etherscan: {
//       apiKey: process.env.API_KEY,
//   },
// };