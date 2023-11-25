import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { ReusableLoader } from "./reusable/ReusableLoader";
import { checkSetup } from "./utility/contractAPI";

function App() {
  const [setupDone, setSetup] = useState(false);
  const [wallet, setWallet] = useState();
  const [publicAddress, setPublicAddress] = useState();
  const [loader, setLoader] = useState(true);
  const [contract, setContract] = useState();
  const handleCheck = async () => {
    const { publicAddress, contract, wallet } = await checkSetup();
    // console.log(publicAddress, contract, wallet);
    if (publicAddress && contract && wallet) {
      setSetup(true);
      setContract(contract);
      setWallet(wallet);
      setPublicAddress(publicAddress);
    }
    setLoader(false);
  };

  useEffect(() => {
    handleCheck();
  }, []);

  return (
    <div className="App vh-100 pt4">
      {loader && <ReusableLoader />}
      {setupDone ? (
        <Home
          wallet={wallet}
          contract={contract}
          setLoader={setLoader}
          publicAddress={publicAddress}
        />
      ) : (
        wallet == null && <div>Please Install an Ethereum Wallet</div>
      )}
    </div>
  );
}

export default App;
