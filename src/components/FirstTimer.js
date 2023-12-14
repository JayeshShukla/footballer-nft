import React, { useState, useEffect } from "react";
import { PlayerCard } from "../reusable/PlayerCard";
import { getSearchResults } from "../utility/algoliaAPI";

const FirstTimer = ({
  firstTimer,
  contract,
  publicAddress,
  wallet,
  setLoader,
  setToastNumber,
  toastNumber,
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
    <div>
      <div
        className="bg-green flex flex-column items-center"
        style={{ color: "white" }}
      >
        <div className="f1">
          Hi Champ 👋.
          <p className="f3">Search Your Favourite Footballer</p>
        </div>
        <div className="bg-blue w-75 w-55-ns w-50-l">
          <input
            className="f4 w-100"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-black w-100 flex flex-wrap pa5 justify-center items-center">
          {results.map((item, i) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstTimer;
