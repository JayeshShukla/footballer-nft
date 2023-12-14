import styles from "./index.module.css";
import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { upgradeNFT } from "../utility/contractAPI";

export const NFTCard = ({ item, i, wallet, contract, setToastNumber }) => {
  const tiltRef = useRef();
  const [upgrade, setUpgrade] = useState(false);
  const [stats, setStats] = useState({
    PAC: 0,
    SHO: 0,
    PAS: 0,
    DRI: 0,
    DEF: 0,
    PHY: 0,
  });
  const {
    image,
    raw: {
      metadata: { attributes },
    },
  } = item;

  const [currentLevel, setCurrentLevel] = useState(attributes[3]?.value);

  useEffect(() => {
    // Initialize VanillaTilt on component mount
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    // Clean up VanillaTilt on component unmount
    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, []);

  const handleUpgrade = (e) => {
    const { name, value } = e.target;
    setStats((prevData) => ({ ...prevData, [name]: parseInt(value, 10) }));
  };

  const resetStats = () => {
    setStats({
      PAC: 0,
      SHO: 0,
      PAS: 0,
      DRI: 0,
      DEF: 0,
      PHY: 0,
    });
    setUpgrade(false);
  };
  const checkStats = async () => {
    if (
      !stats.PAC ||
      !stats.SHO ||
      !stats.PAS ||
      !stats.DRI ||
      !stats.DEF ||
      !stats.PHY
    ) {
      return false;
    }
    const incrementAmount = await upgradeNFT(
      stats,
      wallet,
      contract,
      currentLevel
    );

    incrementAmount === 0 && setToastNumber(3);
  };

  return (
    <>
      {upgrade ? (
        <div className={`${styles.editCard}`}>
          <div className="flex items-center mb1">
            <div className={`w-30 ${styles.attributeName}`}>PAC :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.PAC}
                name="PAC"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>

          <div className="flex items-center mb1">
            <div className={`w-30 ${styles.attributeName}`}>SHO :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.SHO}
                name="SHO"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>

          <div className="flex items-center mb1">
            <div className={`w-30 ${styles.attributeName}`}>PAS :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.PAS}
                name="PAS"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>

          <div className="flex items-center mb1">
            <div className={`w-30 ${styles.attributeName}`}>DRI :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.DRI}
                name="DRI"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>

          <div className="flex items-center mb1">
            <div className={`w-30 ${styles.attributeName}`}>DEF :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.DEF}
                name="DEF"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className={`w-30 ${styles.attributeName}`}>PHY :</div>
            <div className="w-70">
              <input
                className={`${styles.cardInput}`}
                type="number"
                value={stats.PHY}
                name="PHY"
                onChange={(e) => handleUpgrade(e)}
              />
            </div>
          </div>
          <div className="flex">
            <a
              className={`${styles.upgradeButton}`}
              onClick={() => checkStats()}
            >
              Submit
            </a>
            <a
              className={`${styles.upgradeButton}`}
              onClick={() => resetStats()}
            >
              Cancel
            </a>
          </div>
        </div>
      ) : (
        <div ref={tiltRef} className={`${styles.card}`}>
          <img src={image.originalUrl} />
          <div className={styles.content}>
            <h2>{i + 1}</h2>
            <h3>{`Level : ${currentLevel}`}</h3>
            <a onClick={() => setUpgrade(true)}>Upgrade</a>
          </div>
        </div>
      )}
    </>
  );
};
