import React from "react";
import { mintNFT } from "../utility/contractConnection";

export const PlayerCard = ({ item, i }) => {
  return (
    <div
      className="white-90 bg-yellow pointer w-100 w-40-m w-30-ns w-20-l h5 mb5 mb3-m ma4-ns"
      key={i}
    >
      <div className="w-100  h-100">
        <div className="w-100 bg-green">
          <img className="h-100" src={item.image} />
        </div>
        <div className="w-100 h3 bg-red">
          <p className="ma0">
            {item.firstname}
            <strong className="f3">{` ${item.lastname} (${item.jerseyNo})`}</strong>
            {item.country}
          </p>
        </div>
      </div>
      <div className="w-100">
        <button
          className="w-100"
          onClick={() => mintNFT(item.objectID, item.price)}
        >
          Mint NFT({item.price})
        </button>
      </div>
    </div>
  );
};
