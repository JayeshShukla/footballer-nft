import React, { useEffect, useState } from "react";
import { fetchUsersNFT } from "../utility/alchemyAPI";
import { NFTCard } from "../reusable/NFTCard";

export const Home = ({ publicAddress, setLoader }) => {
  const [addressToFetch, setAddressToFetch] = useState(publicAddress);
  const [nftList, setNFTList] = useState([]);
  const [totalNFT, setTotalNFT] = useState(0);

  const fetchNFTList = async () => {
    const { ownedNfts, totalCount } = await fetchUsersNFT(addressToFetch);
    setNFTList(ownedNfts);
    setTotalNFT(totalCount);
    if (!totalCount == 0) {
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
      <div
        className="overflow-x-auto"
        style={{
          display: "-webkit-inline-box",
          scrollbarWidth: "thin",
          msOverflowStyle: "none",
        }}
      >
        {/* {totalNFT ? (
          nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)
        ) : (
          <div>No NFT Found</div>
        )}*/}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
        {nftList && nftList.map((item, i) => <NFTCard item={item} i={i} />)}
      </div>
    </>
  );
};

export default Home;
