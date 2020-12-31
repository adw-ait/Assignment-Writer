import React, { useContext, useState } from "react";
import { AppContext } from "./App";

function InkColor() {
  const [optionValue, setoptionValue] = useState("black");
  const { handleColorChange } = useContext(AppContext);

  return (
    <div className="flex-container-Settings-Items">
      <h2>Ink Color</h2>
      <select
        className="Settings-InkColor-select"
        value={optionValue}
        onChange={(e) => {
          return (
            handleColorChange(e.target.value), setoptionValue(e.target.value)
          );
        }}
        style={{ backgroundColor: { optionValue } }}
      >
        <option value="black">Black </option>
        <option value="darkblue">Blue</option>
        <option value="red">Red</option>
      </select>
    </div>
  );
}

export default InkColor;
