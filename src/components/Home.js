import React, { useEffect, useState } from "react";
import { fetchUsersNFT } from "../utility/alchemyAPI";
import { NFTCard } from "../reusable/NFTCard";
import styles from "../reusable/index.module.css";
import { Navbar } from "./Navbar";

export const Home = ({
  publicAddress,
  setLoader,
  wallet,
  contract,
  setToastNumber,
}) => {
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
    <div className="bg-black">
      <Navbar />
      <div style={{ color: "black" }}>total NFT's Found : {totalNFT}</div>
      <div className={`${styles.container}`}>
        {totalNFT ? (
          nftList &&
          nftList.map((item, i) => (
            <NFTCard
              item={item}
              i={i}
              wallet={wallet}
              contract={contract}
              setToastNumber={setToastNumber}
            />
          ))
        ) : (
          <div>No NFT Found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
