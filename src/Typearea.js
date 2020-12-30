import React, { useContext } from "react";
import { AppContext } from "./App";

function Typearea() {
  const { inputValue, handleInputChange } = useContext(AppContext);

  return (
    <div className="flex-container-typeArea">
      <textarea
        className="typeArea"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default Typearea;
