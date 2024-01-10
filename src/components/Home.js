import React, { useEffect, useState } from "react";
import { fetchUsersNFT } from "../utility/alchemyAPI";
import { NFTCard } from "../reusable/NFTCard";
import styles from "../reusable/index.module.css";
import { Navbar } from "./Navbar";
import FirstTimer from "./FirstTimer";

export const Home = ({
  publicAddress,
  setLoader,
  wallet,
  contract,
  setToastNumber,
  toastNumber,
}) => {
  const [addressToFetch, setAddressToFetch] = useState(publicAddress);
  const [nftList, setNFTList] = useState([]);
  const [totalNFT, setTotalNFT] = useState(0);
  const [buyNFTClicked, setBuyNFTClicked] = useState(false);

  const fetchNFTList = async () => {
    const { ownedNfts, totalCount } = await fetchUsersNFT(addressToFetch);
    setNFTList(ownedNfts);
    setTotalNFT(totalCount);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    fetchNFTList();
  }, [addressToFetch]);

  return (
    <div>
      <Navbar
        setAddressToFetch={setAddressToFetch}
        addressToFetch={addressToFetch}
        setBuyNFTClicked={setBuyNFTClicked}
        buyNFTClicked={buyNFTClicked}
      />
      {buyNFTClicked ? (
        <FirstTimer
          firstTimer={true}
          contract={contract}
          publicAddress={publicAddress}
          wallet={wallet}
          setLoader={setLoader}
          setToastNumber={setToastNumber}
          nftList={nftList}
          addressToFetch={addressToFetch}
        />
      ) : (
        <div className="bg-yellow">
          {totalNFT && (
            <div style={{ color: "yellow" }}>
              total NFT's Found : {totalNFT}
            </div>
          )}
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
                  publicAddress={publicAddress}
                  toastNumber={toastNumber}
                />
              ))
            ) : (
              <div className="black bg-yellow pa5">No NFT found !</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
