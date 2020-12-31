import React, { useContext } from "react";
import { AppContext } from "./App";

function HandwritingArea() {
  const { inputValue, settings } = useContext(AppContext);

  return (
    <div className="flex-container-handwrittenArea">
      <div id="capture">
        <p
          className="handWritten"
          style={{
            letterSpacing: `${settings.letterSpacing}px`,
            left: `${settings.axis.x}px`,
            top: `${settings.axis.y}px`,
            fontSize: `${settings.fontSize}px`,
            lineHeight: `${settings.lineHeight}px`,
          }}
        >
          {inputValue}
        </p>
      </div>
    </div>
  );
}

export default HandwritingArea;
