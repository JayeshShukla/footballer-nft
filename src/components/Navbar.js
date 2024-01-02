import React from "react";
import styles from "./Navbar.module.css";
import { NavbarSearchIcon } from "../asset/NavbarSearchIcon";

export const Navbar = ({ setAddressToFetch, addressToFetch }) => {
  return (
    <div className={`flex items-center justify-center ${styles.navbar}`}>
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
            right: 60,
          }}
        >
          <NavbarSearchIcon />
        </div>
      </div>
    </div>
  );
};
