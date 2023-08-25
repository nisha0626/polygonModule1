const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/nisha.sol/Nisha.json");

const tokenAddress = "0x6FbeE3f9594E3f307140c84946d246aA5cBB2B3c"; // Ethereum address of the deployed ERC721A contract
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
