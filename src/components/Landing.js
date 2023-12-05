import React, { useEffect, useState } from "react";
import FirstTimer from "./FirstTimer";
import Home from "./Home";
import { getNFTCountPerAddress } from "../utility/contractAPI";

const Landing = ({ wallet, contract, setLoader, publicAddress }) => {
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
      {firstTimer ? (
        <FirstTimer
          firstTimer={firstTimer}
          contract={contract}
          publicAddress={publicAddress}
          wallet={wallet}
        />
      ) : (
        <Home publicAddress={publicAddress} setLoader={setLoader} />
      )}
    </div>
  );
};

export default Landing;
