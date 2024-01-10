import React, { useState, useEffect } from "react";
import { PlayerCard } from "../reusable/PlayerCard";
import { getSearchResults } from "../utility/algoliaAPI";
import styles from "./FirstTimer.module.css";
import { Thumbsdown } from "../asset/thumbsDown";

const FirstTimer = ({
  firstTimer,
  contract,
  publicAddress,
  wallet,
  setLoader,
  setToastNumber,
  nftList = [],
  addressToFetch = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const searchResult = await getSearchResults(searchTerm);
      if (searchResult) {
        setResults(searchResult);
      } else {
        setResults([]);
      }
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    handleSearch();
  }, [searchTerm]);

  return (
    <div className={`${styles.firsttimerDiv}`}>
      <div className={`${styles.contentDiv}`}>
        {addressToFetch.toLowerCase() !== publicAddress ? (
          <div className="w-100" style={{ marginTop: "150px" }}>
            <div className="flex justify-center">
              <div className="w-10">
                <Thumbsdown />
              </div>
            </div>
            <div className="f3">You don't own the above public address.</div>
          </div>
        ) : (
          <>
            <p className={`${styles.heading}`}>
              Hi Champ <span className="yellow">👋.</span>
              <br /> Search Your Favourite Footballer Below
            </p>
            <div className="w-100">
              <input
                className={`${styles.playerSearch}`}
                placeholder="type here..."
                type="text"
                value={searchTerm}
                disabled={addressToFetch.toLowerCase() !== publicAddress}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div
              className="w-100 flex flex-wrap pa5 justify-center items-center mt4"
              style={{ overflowY: "auto", maxHeight: "63vh" }}
            >
              {results.map((item, i) => {
                const isNFT = nftList.some((nftItem) => {
                  const {
                    raw: {
                      metadata: { attributes },
                    },
                  } = nftItem;
                  const ownedValue = parseInt(attributes[4]?.value, 10);
                  return parseInt(item.objectID, 10) === ownedValue;
                });

                return (
                  <PlayerCard
                    key={item.objectID}
                    item={item}
                    i={i}
                    firstTimer={firstTimer}
                    contract={contract}
                    publicAddress={publicAddress}
                    wallet={wallet}
                    setLoader={setLoader}
                    setToastNumber={setToastNumber}
                    isNFT={isNFT}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FirstTimer;
