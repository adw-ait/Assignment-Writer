import React, { useContext } from "react";
import { AppContext } from "./App";
import blank from "./resources/images/page2.jpg";
import ruled from "./resources/images/page1.jpg";
// import ruled2 from "./resources/images/page3.jpg";

function HandwritingArea() {
  const { inputValue, settings } = useContext(AppContext);
  const whichPage = settings.bgPage === "blank" ? blank : ruled;
  return (
    <div
      className="flex-container-handwrittenArea"
      id="capture"
      style={{ backgroundImage: `url(${whichPage})` }}
    >
      <div>
        <p
          className="handWritten"
          style={{
            letterSpacing: `${settings.letterSpacing}px`,
            left: `${settings.axis.x}px`,
            top: `${settings.axis.y}px`,
            fontSize: `${settings.fontSize}px`,
            lineHeight: `${settings.lineHeight}px`,
            color: `${settings.inkColor}`,
            fontFamily: `${settings.fontFamily}`,
          }}
        >
          {inputValue}
        </p>
      </div>
    </div>
  );
}

export default HandwritingArea;
