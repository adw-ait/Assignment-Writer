import React, { useContext, useState } from "react";
import { AppContext } from "./App";

function FontSize() {
  const { handleFontSize } = useContext(AppContext);
  const [input, setinput] = useState(55);
  const handleInput = (e) => {
    setinput(e.target.value);
    handleFontSize(e.target.value);
  };
  return (
    <div className="flex-container-Settings-Items">
      <h2>Font Size</h2>

      <input
        className="Settings-FontSize-input"
        type="number"
        value={input}
        onChange={handleInput}
      />
    </div>
  );
}

export default FontSize;
