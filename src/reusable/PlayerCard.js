import React from "react";
import { addFirstNFT } from "../utility/contractAPI";
import styles from "./index.module.css";

export const PlayerCard = ({
  item,
  i,
  firstTimer,
  contract,
  publicAddress,
  wallet,
  setLoader,
  setToastNumber,
  isNFT,
}) => {
  return (
    <div>
      <div className={`${styles.playerCard}`}>
        <img src={item.image} className={`${styles.playerImage}`} />
        <p className={`f4 black ${styles.playerName}`}>
          {item.firstname}
          <b> {item.lastname}</b>
        </p>
        <button
          className={`${isNFT ? styles.alreadyOwnedButton : styles.mintButton}`}
          onClick={() =>
            !isNFT &&
            addFirstNFT(
              item,
              wallet,
              contract,
              publicAddress,
              setLoader,
              setToastNumber
            )
          }
        >
          {isNFT ? "already owned" : "Mint"}
        </button>
      </div>
    </div>
  );
};
