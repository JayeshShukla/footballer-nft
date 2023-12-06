import React from "react";

export const NFTCard = ({ item, i }) => {
  const { image } = item;
  return (
    <div className="ma5 flex" key={i} style={{ width: "fit-content" }}>
      <img src={image.originalUrl} className="self-start" />
    </div>
  );
};
