import playersList from "../asset/players.json";
const algoliasearch = require("algoliasearch");
const client = algoliasearch("C3TC5SHPAJ", "971986c4cfb1b8780f0c99ceaef83495");
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
