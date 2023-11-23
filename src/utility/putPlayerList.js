import playersList from "../asset/players.json";
const algoliasearch = require("algoliasearch");

const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);
const index = client.initIndex("Footballer-NFT");

export const putPlayerList = async () => {
  try {
    // Use autoGenerateObjectIDIfNotExist option
    await index
      .saveObjects(playersList, { autoGenerateObjectIDIfNotExist: true })
      .wait();
  } catch (error) {
    console.log(error);
  }
};
