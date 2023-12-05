import PlayersList from "../asset/players.json";
import { generateGoldSvg } from "../asset/customCard";
import { FC_Barcelona } from "../svg-images/clubs/index";
import { Argentina } from "../svg-images/flags/index";

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
      clubSvg = FC_Barcelona();
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
      countrySvg = Argentina();
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

  // let encodedSvg = btoa(stringFormatImage);
  // encodedSvg = "data:image/svg+xml;base64," + encodedSvg;
  return stringFormatImage;
};
