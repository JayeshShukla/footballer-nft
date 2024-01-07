import React, { useState, useEffect } from "react";
import Loader from "react-js-loader";

export const ReusableLoader = ({ cardLoader }) => {
  const [bgColor, setBgColor] = useState("#fffff");

  useEffect(() => {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const intervalId = setInterval(() => {
      setBgColor(getRandomColor());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: cardLoader ? "100%" : "100vh",
        backdropFilter: "blur(3px)",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Loader type="hourglass" bgColor={bgColor} size={100} />
    </div>
  );
};
