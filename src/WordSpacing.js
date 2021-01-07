import React, { useContext } from "react";
import { AppContext } from "./App";

function WordSpacing() {
  const { settings, handleWordSpacing } = useContext(AppContext);
  return (
    <div className="flex-container-Settings-Items">
      <h2>Word Spacing</h2>
      <input
        type="range"
        max="50"
        value={settings.wordSpacing}
        onChange={handleWordSpacing}
      />
    </div>
  );
}

export default WordSpacing;
