import { ethers } from "ethers";
import contractDetails from "../asset/contractDetails.json";
import { firstNFT } from "./cardMiddleware";

export const checkWallet = async () => {
  try {
    if (window.ethereum) {
      const ethereumWallet = window.ethereum;
      return ethereumWallet;
    } else {
      return false;
    }
  } catch (error) {
    console.error("An error occurred while checking the wallet:", error.stack);
    return null;
  }
};

export const getConnectedPublicAddress = async (wallet) => {
  try {
    if (wallet) {
      const publicAddress = await wallet.request({
        method: "eth_requestAccounts",
      });
      return publicAddress[0];
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createContractObject = async (wallet) => {
  try {
    const provider = new ethers.providers.Web3Provider(wallet);
    const daiContract = new ethers.Contract(
      contractDetails.daiAddress,
      contractDetails.daiAbi,
      provider
    );
    return daiContract;
  } catch (error) {
    console.log(error);
  }
};

export const checkSetup = async () => {
  let publicAddress = null;
  let contract = null;
  let wallet = null;

  try {
    wallet = await checkWallet();
    if (wallet) {
      publicAddress = await getConnectedPublicAddress(wallet);
      if (publicAddress) {
        contract = await createContractObject(wallet);
      } else {
        console.log("Could Not get publicAddress");
      }
    } else {
      wallet = null;
      console.log("Eth Based Wallet Not Found");
    }
  } catch (error) {
    console.log("Some Issue in Checking Setup", error);
  }

  return { publicAddress, contract, wallet };
};

export const getNFTCountPerAddress = async (contract, publicAddress) => {
  try {
    const nftCount = await contract.clientNFTCount(publicAddress); //change the  function  name
    return nftCount.toNumber();
  } catch (error) {
    console.log("Some Issue while getting NFT Count Per Address", error);
  }
};

export const addFirstNFT = async (objectID, contract, publicAddress) => {
  const tokenURI = await firstNFT(objectID);
  console.log(tokenURI);
};
