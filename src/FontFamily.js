import React, { useContext, useState } from "react";
import { AppContext } from "./App";
function FontFamily() {
  const { handleFontFamily } = useContext(AppContext);
  const [optionValue, setoptionValue] = useState("customFont1");
  return (
    <div className="flex-container-Settings-Items">
      <h2>Font Family</h2>
      <select
        className="Settings-select"
        value={optionValue}
        onChange={(e) => {
          return (
            handleFontFamily(e.target.value), setoptionValue(e.target.value)
          );
        }}
      >
        <option value="customFont1">Font 1</option>
        <option value="customFont2">Font 2</option>
        <option value="customFont3">Font 3</option>
      </select>
    </div>
  );
}

export default FontFamily;
