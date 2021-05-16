import React, { useEffect } from "react";

const FooterAmount = (props) => {
  useEffect(() => {}, [props.tPrice]);
  return (
    <div>
      {props.tPrice <= 0 ? (
        <h2>Buy Something!</h2>
      ) : (
        <h1>
          Total Amount ={" "}
          <span style={{ color: "crimson" }}>{props.tPrice}</span>/-
        </h1>
      )}
    </div>
  );
};
export default FooterAmount;
