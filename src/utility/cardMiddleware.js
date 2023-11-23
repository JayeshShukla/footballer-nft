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
  const { lastname, image } = PlayersList[objectID - 1];
  const stringFormatImage = generateGoldSvg(
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

  const encodedSvg = btoa(stringFormatImage);
  console.log(encodedSvg);
};
