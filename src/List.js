import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

const List = (props) => {
  const list = props.list;
  //var quantity = 0;
  useEffect(() => {}, [props.tPrice]);

  return (
    <div>
      <h1>Our Products</h1>
      {list.map((item) => {
        const { id, name, price, quantity } = item;
        return (
          <article key={id}>
            <div>
              <hr />
              <h4>
                {name} {price}₹
              </h4>
              <Button
                style={{ marginBottom: ".5rem" }}
                color="success"
                onClick={() => {
                  //quantity++;
                  console.log(quantity);
                  props.setTPrice(props.tPrice + price);
                }}
              >
                ➕
              </Button>
              <Button
                style={{ marginBottom: ".5rem", marginLeft: "1rem" }}
                color="danger"
                onClick={() => {
                  if (props.tPrice <= 0) {
                    props.setTPrice(0);
                    toast.error("Order Something First");
                  } else {
                    props.setTPrice(props.tPrice - price);
                  }
                }}
              >
                ➖
              </Button>
              <span
                style={{
                  float: "right",
                  marginLeft: "-6rem",
                  marginRight: "5rem",
                }}
              >
                {quantity <= 0 ? (
                  ""
                ) : (
                  <span style={{ fontSize: "2rem" }}>x {quantity}</span>
                )}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
