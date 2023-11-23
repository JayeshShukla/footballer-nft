import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { PlayerCard } from "../reusable/PlayerCard";

const FirstTimer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Algolia configuration
  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
    process.env.REACT_APP_ALGOLIA_API_KEY
  );
  const index = searchClient.initIndex("Footballer-NFT");

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const { hits } = await index.search(searchTerm);
      setResults(hits);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="bg-green flex flex-column items-center">
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
      <div className="bg-black vh-75 w-100 flex flex-wrap pa5 justify-center items-center overflow-y-scroll">
        {results.map((item, i) => (
          <PlayerCard key={item.objectID} item={item} i={i} />
        ))}
      </div>
    </div>
  );
};

export default FirstTimer;
