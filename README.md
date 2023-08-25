# Polygon Proof of Stake - OnePiece NFT Contract Guide

This project  guide outlines the steps for deploying and interacting with the Nisha NFT contract on the Polygon network using the Proof of Stake mechanism. The contract is based on the ERC721A standard that allows the creation and management of unique NFTs.

# Smart Contract Overview

* Solidity Version: 0.8.9

* ERC721A Import: The contract extends the ERC721A contract, implementing the ERC721A standard.

* Contract Name and Symbol: Contract named "OnePiece" with symbol "OP".

* Maximum Quantity of Tokens: The contract allows minting up to 5 NFTs.

* Base URL for NFTs: Metadata for NFTs stored on IPFS with the provided base URL.

* Prompt Description: "Unlock your haki"

* Constructor: Initializes contract with name, symbol, and owner address.

* Modifier: onlyOwner: Restricts certain functions to the contract owner.

* Mint Function: Allows the owner to mint a specified quantity of NFTs.

* Base URI Override: Sets the base URI for NFT metadata.

* Prompt Description Function: Allows external access to the prompt description.

## Execution Steps

### Generate NFT Collection:
- Utilize an AI model (DALLE 2, Midjourney, or Lexica) to create 5 unique NFTs.
 Store Items on IPFS:
Upload generated NFTs to IPFS, noting their IPFS hashes for token URIs.

- Deploy the Contract:
Deploy the OnePiece contract on the Polygon network, providing contract name, symbol, and prompt description.

- Implement promptDescriptionDetail Function:
Add promptDescriptionDetail function to retrieve a detailed prompt description.

- Map NFTs (Optional):
Use the Polygon token mapper tool to map the NFTs on the Polygon network.

- Batch Mint NFTs:
Write a script (Mint.js) to batch mint all 5 NFTs to specified addresses with corresponding IPFS hashes.

- Approve NFTs for Transfer:
Implement steps to approve NFTs for transfer between Ethereum and Polygon networks.

- Deposit NFTs to the Bridge:
Transfer NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge.

- Test balanceOf on Mumbai:
Use the getBalance.js script to test the NFT balance of an address on the Polygon Mumbai network.

### Scripts

Batch Mint ERC721A Tokens:
A script to batch mint ERC721A tokens. Modify variables (private key, network provider, contract address) and run.

Transfer ERC721A Tokens to Ethereum FxChain Network:
A script to transfer ERC721A tokens from Ethereum Goerli to FxChain network. Update variables and run.

ERC721A Token Balance Checker:
A script to check ERC721A token balance for a specific wallet. Set contract and wallet addresses, then run.

# License

This project is licensed under the MIT License.

## Author 
NISHA KUMARI - CHANDIGARH UNIVERSITY
