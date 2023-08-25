const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/nisha.sol/Nisha.json");

const tokenAddress = "0x63C7aaf4e96dDe0bBE9fFC5325A9Fb2B4f9E8270"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x6CAdfaaf2ea038fBbd95131E4a90c221e89D1b85"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
