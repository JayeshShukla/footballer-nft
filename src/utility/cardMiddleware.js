import PlayersList from "../asset/players.json";
import { generateGoldSvg } from "../asset/customCard";

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

export const firstNFT = async (objectID) => {
  const { PAC, DRI, SHO, DEF, PAS, PHY, OVR } = await generateRandomAttributes(
    33
  );
  const { firstname, lastname, image } = PlayersList[objectID - 1];
  const stringFormatImage = generateGoldSvg(
    firstname,
    lastname,
    image,
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

export const makeTokenURI = async () => {
  // "{",
  // '"name": "#',
  // tokenId.toString(),
  // '",',
  // '"description": "Battles on chain",',
  // '"image": "',
  // generateCharacter(tokenId),
  // '"',
  // "}"
};
