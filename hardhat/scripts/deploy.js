const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {

  const metadataURL = "ipfs://YOUR-METADATA-CID";
  const lw3PunksContract = await hre.ethers.deployContract("NFTRecordKeeper",);

  await lw3PunksContract.waitForDeployment();

  console.log("record contract Contract Address:", lw3PunksContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });