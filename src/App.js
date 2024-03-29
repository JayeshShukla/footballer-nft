import "./App.css";
import styles from "./App.module.css";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import { ReusableLoader } from "./reusable/ReusableLoader";
import { checkSetup } from "./utility/contractAPI";
import { updateAlgolia } from "./utility/algoliaAPI";
import { EtherSvg } from "./asset/etherSvg";

function App() {
  const [setupDone, setSetup] = useState(false);
  const [wallet, setWallet] = useState();
  const [publicAddress, setPublicAddress] = useState();
  const [loader, setLoader] = useState(true);
  const [contract, setContract] = useState();
  const [errorText, setErrorText] = useState(
    "Please Install an Ethereum Wallet"
  );

  const handleCheck = async () => {
    const { publicAddress, contract, wallet } = await checkSetup();
    if (publicAddress && contract && wallet) {
      setSetup(true);
      setContract(contract);
      setWallet(wallet);
      setPublicAddress(publicAddress);
    } else if (!publicAddress && !contract && wallet) {
      console.log("Denied Login");
      setErrorText("Please Login To Your Wallet");
    }
    setLoader(false);
  };

  useEffect(() => {
    updateAlgolia();
    handleCheck();
  }, [setupDone]);

  return (
    <div className="App">
      {loader && <ReusableLoader />}
      {setupDone ? (
        <Landing
          wallet={wallet}
          contract={contract}
          setLoader={setLoader}
          publicAddress={publicAddress}
        />
      ) : (
        <div className={`${styles.infoDisplay}`}>
          {errorText}
          <div style={{ width: "100px" }}>
            <EtherSvg />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
