import React, { useEffect, useState } from "react";
import FirstTimer from "./FirstTimer";
import { Navbar } from "./Navbar";
import { getNFTCountPerAddress } from "../utility/contractAPI";

const Home = ({ wallet, contract, setLoader, publicAddress }) => {
  const [firstTimer, setFirstTimer] = useState(null);

  const getNFTCount = async () => {
    const nftCount = await getNFTCountPerAddress(contract, publicAddress);
    nftCount ? setFirstTimer(false) : setFirstTimer(true);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    getNFTCount();
  }, []);

  return (
    <div>
      <Navbar />
      {firstTimer ? (
        <FirstTimer
          firstTimer={firstTimer}
          contract={contract}
          publicAddress={publicAddress}
        />
      ) : (
        <div>not first timer</div>
      )}
    </div>
  );
};

export default Home;
