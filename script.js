const hre = require("hardhat");

async function main() {
  const GenLayerSpinner = await hre.ethers.getContractFactory("GenLayerSpinner");
  const spinner = await GenLayerSpinner.deploy();
  await spinner.deployed();

  console.log(`Spinner contract deployed to: ${spinner.address}`);
  console.log(`Initial status: ${await spinner.getStatus()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
