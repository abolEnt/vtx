import React from "react";

function Tour({ info }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "2rem",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "navy",
        color: "white",
        margin: "10px",
      }}
    >
      <h3>{info.name}</h3>
      <img src={info.image} height="150px" width="150px" />
      <h4>${info.price}</h4>
      <h6>{info.info}</h6>
    </div>
  );
}

export default Tour;
