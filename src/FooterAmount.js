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
          <Button
            style={{
              backgroundColor: "#40B3F9",
              float: "right",
              marginLeft: "-15rem",
              marginRight: "5rem",
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
          <h1>
            Total Amount ={" "}
            <span style={{ color: "crimson" }}>{props.tPrice}</span>/-
          </h1>
        </>
      )}
    </div>
  );
};
export default FooterAmount;
