import React from "react";
import styles from "./Navbar.module.css";
import { NavbarSearchIcon } from "../asset/NavbarSearchIcon";

export const Navbar = ({
  setAddressToFetch,
  addressToFetch,
  setBuyNFTClicked,
  buyNFTClicked,
}) => {
  return (
    <div className={`w-100 flex ${styles.navbar}`}>
      <div className="w-100">
        <div className={`flex items-center justify-center `}>
          <div className="flex items-center w-40 relative">
            <input
              className={`${styles.navbarInput}`}
              placeholder="search address"
              onChange={(e) => setAddressToFetch(e.target.value)}
              value={addressToFetch}
            />
            <div
              style={{
                width: "30px",
                marginTop: "10px",
                position: "absolute",
                right: 10,
              }}
            >
              <NavbarSearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
      >
        <button
          className={`nowrap pointer ${styles.newNFTbutton}`}
          onClick={() => setBuyNFTClicked((prevData) => !prevData)}
        >
          {buyNFTClicked ? `Owned NFT` : `Mint New NFT`}
        </button>
      </div>
    </div>
  );
};
