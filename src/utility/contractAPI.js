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
    const nftCount = await contract.usersTotalToken(publicAddress); //change the  function  name
    return nftCount.toNumber();
  } catch (error) {
    console.log("Some Issue while getting NFT Count Per Address", error);
  }
};

export const addFirstNFT = async (item, wallet, contract, publicAddress) => {
  try {
    const provider = new ethers.providers.Web3Provider(wallet);
    const {
      objectID,
      firstname,
      lastname,
      country,
      jerseyNo,
      image,
      price,
      description,
      club,
    } = item;

    const nftURI = await firstNFT(objectID);
    console.log(nftURI);
    const signer = provider.getSigner();
    if (nftURI && contract && contract.safeMint && contract.connect) {
      const connectedContract = contract.connect(signer);
      const response = await connectedContract.safeMint(
        publicAddress,
        objectID,
        jerseyNo,
        nftURI,
        country,
        club,
        description
      );
      console.log("Response:", response);
    } else {
      console.error("Invalid contract or missing methods.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
