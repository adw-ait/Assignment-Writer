import React, { useContext } from "react";
import { AppContext } from "./App";

function LetterSpacing() {
  const { settings, handleLetterSpacing } = useContext(AppContext);

  return (
    <div className="flex-container-Settings-Items">
      <h2>Letter Spacing</h2>
      <input
        type="range"
        max="50"
        value={settings.letterSpacing}
        onChange={handleLetterSpacing}
      />
    </div>
  );
}

export default LetterSpacing;
