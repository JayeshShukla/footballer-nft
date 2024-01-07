import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ toastNumber }) => {
  const notify = () => {
    toastNumber === 1 &&
      toast.error(
        `You already own this card.
      Please mint another player !`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );

    toastNumber === 2 &&
      toast("Card minted with ❤️ !", {
        position: toast.POSITION.TOP_CENTER,
        className: "foo-bar",
      });

    toastNumber === 3 &&
      toast(
        <div>
          Card updated with ❤️.
          <br />
          Changes will reflect shortly. Thanks for being patient.
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          className: "foo-bar",
        }
      );

    toastNumber >= 4 &&
      toast("Average of Card is still the same, TRY AGAIN !!!", {
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
