import React, { useEffect } from "react";
import { Button } from "reactstrap";

const FooterAmount = (props) => {
  useEffect(() => {}, [props.tPrice]);
  const datasheet = [
    {
      id: 1,
      name: "Coke",
      price: 25,
      quantity: 0,
    },
    {
      id: 2,
      name: "Pepsi",
      price: 32,
      quantity: 0,
    },
    {
      id: 3,
      name: "Soda",
      price: 47,
      quantity: 0,
    },
  ];
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
              props.setCAmount(props.repay);
              props.setTPrice(0);
              props.setLists(datasheet);
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
