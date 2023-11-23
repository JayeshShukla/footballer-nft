import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractDetails from "./asset/contractDetails.json";
import { ReusableLoader } from "./reusable/ReusableLoader";
import { putPlayerList } from "./utility/putPlayerList";

function App() {
  const [wallet, setWallet] = useState(false);
  const [contract, setContract] = useState({});
  const [load, setLoad] = useState(true);

  const checkWallet = () => {
    if (window.ethereum) {
      setWallet(window.ethereum);
    } else {
      setWallet(false);
    }
  };

  const getContractObject = async () => {
    try {
      if (wallet) {
        const provider = new ethers.providers.Web3Provider(wallet);
        const daiContract = new ethers.Contract(
          contractDetails.daiAddress,
          contractDetails.daiAbi,
          provider
        );
        setContract(daiContract);
      }
    } catch (error) {
      console.log(error);
      setContract({});
    }
  };

  useEffect(() => {
    const setupContractAndFinishLoading = async () => {
      await getContractObject();
      setLoad(false);
    };

    checkWallet();
    if (wallet) {
      setupContractAndFinishLoading();
      putPlayerList();
    } else {
      setLoad(false);
    }
  }, [wallet]);

  return (
    <div className="App vh-100 pt4">
      {load && <ReusableLoader />}
      {wallet ? (
        <Home wallet={wallet} contract={contract} setLoad={setLoad} />
      ) : (
        <div>Please Install an Ethereum Wallet</div>
      )}
    </div>
  );
}

export default App;
