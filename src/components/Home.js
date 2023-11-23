import React, { useEffect, useState } from "react";
import FirstTimer from "./FirstTimer";
import { Navbar } from "./Navbar";

const Home = ({ wallet, contract, setLoad }) => {
  const [firstTimer, setFirstTimer] = useState(true);

  const checkUserNFTCount = async () => {
    try {
      if (wallet && contract) {
        //change this
        const nftCount = await contract.getUserDetails();
        nftCount[0] ? setFirstTimer(false) : setFirstTimer(true);
      }
    } catch (error) {
      console.log(error);
      setFirstTimer(true);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    setLoad(true);
    checkUserNFTCount();
  }, [contract, wallet]);

  return (
    <div>
      <Navbar />
      {firstTimer ? <FirstTimer /> : <div>not first timer</div>}
    </div>
  );
};

export default Home;
