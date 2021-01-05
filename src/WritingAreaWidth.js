import React, { useContext } from "react";
import { AppContext } from "./App";

function WritingAreaWidth() {
  const { handwrittenAreaWidth, handleWidth, settings } = useContext(
    AppContext
  );

  return (
    <div className="flex-container-Settings-Items">
      <h2>Width</h2>
      <input
        type="range"
        min="167"
        max={handwrittenAreaWidth}
        value={settings.handWrittenWidth}
        onChange={handleWidth}
      />
    </div>
  );
}

export default WritingAreaWidth;
