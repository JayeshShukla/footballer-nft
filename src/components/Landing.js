import React, { useEffect, useState } from "react";
import FirstTimer from "./FirstTimer";
import Home from "./Home";
import Toast from "../reusable/ReusableToast";
import { getNFTCountPerAddress } from "../utility/contractAPI";

const Landing = ({ wallet, contract, setLoader, publicAddress }) => {
  const [firstTimer, setFirstTimer] = useState(null);
  const [toastNumber, setToastNumber] = useState(0);

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
  }, [firstTimer, toastNumber]);

  return (
    <div>
      {firstTimer ? (
        <FirstTimer
          firstTimer={firstTimer}
          contract={contract}
          publicAddress={publicAddress}
          wallet={wallet}
          setLoader={setLoader}
          setToastNumber={setToastNumber}
        />
      ) : (
        <Home
          publicAddress={publicAddress}
          setLoader={setLoader}
          contract={contract}
          wallet={wallet}
          setToastNumber={setToastNumber}
          toastNumber={toastNumber}
        />
      )}
      <Toast toastNumber={toastNumber} />
    </div>
  );
};

export default Landing;
