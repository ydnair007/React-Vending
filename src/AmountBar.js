import React, { useEffect } from "react";
import { toast } from "react-toastify";

const AmountBar = (props) => {
  useEffect(() => {
    if (props.isEdit) {
      toast.dark("Locked 🔒");
    } else {
      toast.dark("Unlocked 🔓");
    }
  }, [props.isEdit]);
  return (
    <div>
      {props.cAmount + props.tPrice <= 0 ? (
        <h3 style={{ textAlign: "right", marginRight: "4rem" }}>
          👊🏻 Piss Off Looser 😠
        </h3>
      ) : (
        <h3 style={{ textAlign: "right", marginRight: "4rem" }}>
          Amount 👉🏻 : {props.cAmount} 💰
        </h3>
      )}
    </div>
  );
};
export default AmountBar;
