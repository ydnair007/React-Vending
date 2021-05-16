import React, { useEffect } from "react";

const Header = (props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <h3 style={{ textAlign: "right", marginRight: "10rem" }}>
        Amount 👉🏻 : {props.cAmount} 💰
      </h3>
    </div>
  );
};
export default Header;
