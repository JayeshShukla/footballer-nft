import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ toastNumber }) => {
  const notify = () => {
    // toast("Default Notification !");

    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });

    toastNumber === 1 &&
      toast.error(
        `You already own this card.
      Please mint another player !`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_LEFT,
    // });

    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });

    toastNumber === 2 &&
      toast("Card minted with ❤️ !", {
        position: toast.POSITION.TOP_CENTER,
        className: "foo-bar",
      });

    toastNumber === 3 &&
      toast("OVR bracket same, Try agian !", {
        position: toast.POSITION.TOP_CENTER,
        className: "foo-bar",
      });
  };

  useEffect(() => {
    notify();
  }, [toastNumber]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Toast;
