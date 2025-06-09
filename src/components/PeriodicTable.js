import React from "react";
import elements from "../data/elements";
import ElementBox from "./ElementBox";

function PeriodicTable({ onSelectElement }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {elements.map((el) => (
        <ElementBox key={el.symbol} element={el} onClick={onSelectElement} />
      ))}
    </div>
  );
}

export default PeriodicTable;