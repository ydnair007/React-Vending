import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

const List = (props) => {
  //const list = props.list;
  const [list, setList] = useState(props.lists);
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
                  if (price <= props.cAmount) {
                    props.setCAmount(props.cAmount - price);
                    props.setTPrice(props.tPrice + price);
                    let newList = item;
                    newList.quantity = quantity + 1;
                    //setList(newList);
                    toast.dark("🧃 " + name + " added!");
                  } else {
                    toast.error("Not Enough Funds");
                  }
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
                  } else if (quantity > 0) {
                    props.setCAmount(props.cAmount + price);
                    props.setTPrice(props.tPrice - price);
                    let newList = item;
                    newList.quantity = quantity - 1;
                    toast.dark("🧃 " + name + " removed!");
                  } else {
                    toast.error("🧃 " + name + " not in cart!");
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
                  <span style={{ marginLeft: "-2rem", fontSize: "2rem" }}>
                    x {quantity}
                  </span>
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
