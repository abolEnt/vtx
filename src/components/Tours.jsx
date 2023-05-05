import React from "react";
import Tour from "./Tour";

function Tours({ data }) {
  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridTemplateRows: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      {data.map((info) => {
        return <Tour info={info} key={info.id} />;
      })}
    </div>
  );
}

export default Tours;
