import PlayersList from "../asset/players.json";
import { generateGoldSvg } from "../asset/goldSvg";
import { fcbarcelona } from "../svg-images/clubs/index";
import { argentina } from "../svg-images/flags/index";

export const generateRandomAttributes = async (maxLimit = 100) => {
  const PAC = Math.floor(Math.random() * maxLimit) + 1;
  const DRI = Math.floor(Math.random() * maxLimit) + 1;
  const SHO = Math.floor(Math.random() * maxLimit) + 1;
  const DEF = Math.floor(Math.random() * maxLimit) + 1;
  const PAS = Math.floor(Math.random() * maxLimit) + 1;
  const PHY = Math.floor(Math.random() * maxLimit) + 1;
  const OVR = parseInt((PAC + DRI + SHO + DEF + PAS + PHY) / 6);

  return { PAC, DRI, SHO, DEF, PAS, PHY, OVR };
};

export const fetchClub = (club) => {
  let clubSvg = null;
  switch (club) {
    case "FCB":
      clubSvg = fcbarcelona();
      break;
    case "club2":
      // Do something for club2
      break;
    case "club3":
      // Do something for club3
      break;
    // Add more cases as needed
    default:
      // Default case if no match is found
      console.log(`Unknown club: ${club}`);
  }

  return clubSvg;
};

export const fetchCountry = (country) => {
  let countrySvg = null;
  switch (country) {
    case "Argentina":
      countrySvg = argentina();
      break;
    case "club2":
      // Do something for club2
      break;
    case "club3":
      // Do something for club3
      break;
    // Add more cases as needed
    default:
      // Default case if no match is found
      console.log(`Unknown club: ${country}`);
  }

  return countrySvg;
};

export const firstNFT = async (objectID) => {
  const { PAC, DRI, SHO, DEF, PAS, PHY, OVR } = await generateRandomAttributes(
    33
  );
  const { firstname, lastname, country, club } = PlayersList[objectID - 1];

  const clubSvg = fetchClub(club);
  const countrySvg = fetchCountry(country);
  const stringFormatImage = generateGoldSvg(
    firstname,
    lastname,
    clubSvg,
    countrySvg,
    PAC,
    DRI,
    SHO,
    DEF,
    PAS,
    PHY,
    OVR
  );
  return stringFormatImage;
};

export const isLevelUpgradable = (stats, currentLevel) => {
  const { PAC, SHO, PAS, DRI, DEF, PHY } = stats;
  const OVR = (PAC + SHO + PAS + DRI + DEF + PHY) / 6;
  console.log(OVR, currentLevel);
  if (OVR <= 33) {
    return currentLevel === 1
      ? 0
      : currentLevel === 2
      ? -1
      : currentLevel === 3
      ? -2
      : -3;
  } else if (33 < OVR && OVR <= 66) {
    return currentLevel === 1
      ? 1
      : currentLevel === 2
      ? 0
      : currentLevel === 3
      ? -1
      : -2;
  } else if (66 < OVR && OVR <= 99) {
    return currentLevel === 1
      ? 2
      : currentLevel === 2
      ? 1
      : currentLevel === 3
      ? 0
      : -1;
  } else {
    return currentLevel === 1
      ? 3
      : currentLevel === 2
      ? 2
      : currentLevel === 3
      ? 1
      : 0;
  }
};
