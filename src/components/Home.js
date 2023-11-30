import React, { useEffect, useState } from "react";
import FirstTimer from "./FirstTimer";
import { Navbar } from "./Navbar";
import { getNFTCountPerAddress } from "../utility/contractAPI";

const Home = ({ wallet, contract, setLoader, publicAddress }) => {
  const [firstTimer, setFirstTimer] = useState(null);

  const getNFTCount = async () => {
    const nftCount = await getNFTCountPerAddress(contract, publicAddress);
    nftCount ? setFirstTimer(false) : setFirstTimer(true);
  };

  useEffect(() => {
    setLoader(true);
    getNFTCount();
    if (firstTimer === false || firstTimer === true) {
      setLoader(false);
    }
  }, [firstTimer]);

  return (
    <div>
      <Navbar />
      {firstTimer ? (
        <FirstTimer
          firstTimer={firstTimer}
          contract={contract}
          publicAddress={publicAddress}
          wallet={wallet}
        />
      ) : (
        <div>not first timer</div>
        //when you create a component of it please setLoader as true to manage the loading.
      )}
    </div>
  );
};

export default Home;
