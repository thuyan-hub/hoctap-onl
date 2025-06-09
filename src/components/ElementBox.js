import React from "react";

function ElementBox({ element, onClick }) {
  return (
    <div onClick={() => onClick(element)} style={{
      border: "1px solid #ccc",
      padding: 10,
      width: 60,
      textAlign: "center",
      cursor: "pointer"
    }}>
      <strong>{element.symbol}</strong>
      <div>{element.number}</div>
    </div>
  );
}

export default ElementBox;