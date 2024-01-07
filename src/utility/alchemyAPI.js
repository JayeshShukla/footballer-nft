import contract from "../asset/contractDetails.json";

export const fetchUsersNFT = async (addressToFetch) => {
  console.log("first");
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    return await fetch(
      `https://polygon-mumbai.g.alchemy.com/nft/v3/${process.env.REACT_APP_ALCHEMY_API_KEY}/getNFTsForOwner?owner=${addressToFetch}&contractAddresses[]=${contract.daiAddress}&withMetadata=true&pageSize=100&refreshCache=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  } catch (error) {
    console.log("Error while fetching NFT...", error);
  }
};
