import React, { useContext, useState } from "react";
import { AppContext } from "./App";
function FontFamily() {
  const { handleFontFamily } = useContext(AppContext);
  const [optionValue, setoptionValue] = useState("customFont1");
  return (
    <div className="flex-container-Settings-Items">
      <h2>Font Family</h2>
      <select
        className="Settings-InkColor-select"
        value={optionValue}
        onChange={handleFontFamily}
      >
        <option value="customFont1">Font 1</option>
        <option value="customFont2">Font 2</option>
      </select>
    </div>
  );
}

export default FontFamily;
