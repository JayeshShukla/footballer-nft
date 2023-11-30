// import algoliasearch from "algoliasearch/lite";
import playersList from "../asset/players.json";
const algoliasearch = require("algoliasearch");

// Algolia configuration
const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY
);

const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX);

export const getSearchResults = async (searchTerm) => {
  if (searchTerm.trim() === "") {
    return [];
  }
  try {
    const { hits } = await index.search(searchTerm);
    return hits;
  } catch (error) {
    console.error("Error searching:", error);
    return null;
  }
};

export const updateAlgolia = async () => {
  try {
    // Use autoGenerateObjectIDIfNotExist option
    await index
      .saveObjects(playersList, { autoGenerateObjectIDIfNotExist: true })
      .wait();
  } catch (error) {
    console.log(error);
  }
};
