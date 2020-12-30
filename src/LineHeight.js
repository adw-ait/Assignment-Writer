import React, { useContext } from "react";
import { AppContext } from "./App";
function LineHeight() {
  const { settings, handleLineHeight } = useContext(AppContext);
  return (
    <div className="flex-container-Settings-Items">
      <h2>Line Height</h2>
      <input
        type="range"
        max="100"
        value={settings.lineHeight}
        onChange={handleLineHeight}
      />
    </div>
  );
}

export default LineHeight;
