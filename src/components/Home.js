import React, { useEffect, useState } from "react";
import { fetchUsersNFT } from "../utility/alchemyAPI";
import { NFTCard } from "../reusable/NFTCard";

export const Home = ({ publicAddress, setLoader }) => {
  const [addressToFetch, setAddressToFetch] = useState(publicAddress);
  const [nftList, setNFTList] = useState([]);
  const [totalNFT, setTotalNFT] = useState(0);

  const fetchNFTList = async () => {
    try {
      const { ownedNfts, totalCount } = await fetchUsersNFT(addressToFetch);
      setNFTList(ownedNfts);
      setTotalNFT(totalCount);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    fetchNFTList();
  }, [addressToFetch]);

  return (
    <>
      <div>total NFT's Found : {totalNFT}</div>
      {totalNFT ? (
        nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)
      ) : (
        <div>No NFT Found</div>
      )}
    </>
  );
};

export default Home;
