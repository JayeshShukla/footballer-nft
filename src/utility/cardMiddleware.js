import PlayersList from "../asset/players.json";
import { generateGoldSvg } from "../asset/goldSvg";
import { generateOrangeSvg } from "../asset/orangeSvg";
import { generateBlueSvg } from "../asset/blueSvg";
import { generateFinalSvg } from "../asset/finalSvg";
import {
  fcbarcelona,
  realmadrid,
  parissaintgermain,
  liverpool,
  bayernmunich,
  mancity,
  atleticomadrid,
  tottenham,
  manunited,
  chelsea,
} from "../svg-images/clubs/index";

import {
  argentina,
  portugal,
  wales,
  spain,
  southKorea,
  senegal,
  scotland,
  poland,
  norway,
  netherlands,
  italy,
  germany,
  france,
  england,
  egypt,
  croatia,
  costaRica,
  brazil,
  belgium,
  austria,
  algeria,
} from "../svg-images/flags/index";

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
    case "RM":
      clubSvg = realmadrid();
      break;
    case "PSG":
      clubSvg = parissaintgermain();
      break;
    case "LIV":
      clubSvg = liverpool();
      break;
    case "FBM":
      clubSvg = bayernmunich();
      break;
    case "MC":
      clubSvg = mancity();
      break;
    case "ATM":
      clubSvg = atleticomadrid();
      break;
    case "TOT":
      clubSvg = tottenham();
      break;
    case "MUN":
      clubSvg = manunited();
      break;
    case "CHE":
      clubSvg = chelsea();
      break;
    case "ROM":
      clubSvg = chelsea();
      break;
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
    case "Costa Rica":
      countrySvg = costaRica();
      break;
    case "Portugal":
      countrySvg = portugal();
      break;
    case "Brazil":
      countrySvg = brazil();
      break;
    case "Belgium":
      countrySvg = belgium();
      break;
    case "Austria":
      countrySvg = austria();
      break;
    case "Algeria":
      countrySvg = algeria();
      break;
    case "Croatia":
      countrySvg = croatia();
      break;
    case "Scotland":
      countrySvg = scotland();
      break;
    case "Spain":
      countrySvg = spain();
      break;
    case "Germany":
      countrySvg = germany();
      break;
    case "South Korea":
      countrySvg = southKorea();
      break;
    case "Netherlands":
      countrySvg = netherlands();
      break;
    case "France":
      countrySvg = france();
      break;
    case "Poland":
      countrySvg = poland();
      break;
    case "Italy":
      countrySvg = italy();
      break;
    case "Wales":
      countrySvg = wales();
      break;
    case "Senegal":
      countrySvg = senegal();
      break;
    case "Norway":
      countrySvg = norway();
      break;
    case "Egypt":
      countrySvg = egypt();
      break;
    case "England":
      countrySvg = england();
      break;
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
  const OVR = Math.round(
    (parseInt(PAC) +
      parseInt(SHO) +
      parseInt(PAS) +
      parseInt(DRI) +
      parseInt(DEF) +
      parseInt(PHY)) /
      6
  );

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

export const getUpgradedNFT = (updatedLevel, stats, objectID) => {
  let nftURI;
  const { PAC, SHO, PAS, DRI, DEF, PHY } = stats;
  const OVR = Math.round(
    (parseInt(PAC) +
      parseInt(SHO) +
      parseInt(PAS) +
      parseInt(DRI) +
      parseInt(DEF) +
      parseInt(PHY)) /
      6
  );
  let { firstname, lastname, club, country } = PlayersList[objectID - 1];
  let clubSvg = fetchClub(club);
  let countrySvg = fetchCountry(country);
  if (updatedLevel === 1) {
    nftURI = generateGoldSvg(
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
  } else if (updatedLevel === 2) {
    nftURI = generateBlueSvg(
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
  } else if (updatedLevel === 3) {
    nftURI = generateOrangeSvg(
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
  } else {
    nftURI = generateFinalSvg(firstname, lastname, clubSvg, countrySvg);
  }
  return nftURI;
};
