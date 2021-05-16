import React, { useEffect } from "react";
import { Button } from "reactstrap";
import data from "./data copy";

const FooterAmount = (props) => {
  useEffect(() => {}, [props.tPrice]);
  return (
    <div>
      {props.tPrice <= 0 ? (
        <h2>Buy Something!</h2>
      ) : (
        <>
          <h1>
            Total Amount ={" "}
            <span style={{ color: "crimson" }}>{props.tPrice}</span>/-
          </h1>
          <Button
            style={{
              backgroundColor: "#40B3F9",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              console.log(props.repay);
              props.setTPrice(0);
              props.setLists(data);
            }}
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
};
export default FooterAmount;
