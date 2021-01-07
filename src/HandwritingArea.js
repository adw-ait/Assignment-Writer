import React, { useContext, useEffect } from "react";
import { AppContext } from "./App";
import blank from "./resources/images/page2.jpg";
import ruled from "./resources/images/page1.jpg";

function HandwritingArea() {
  const {
    inputValue,
    settings,
    handwrittenAreaRef,
    sethandwrittenAreaWidth,
  } = useContext(AppContext);
  const whichPage = settings.bgPage === "blank" ? blank : ruled;

  useEffect(() => {
    sethandwrittenAreaWidth(handwrittenAreaRef.current.clientWidth - 20);
  });

  return (
    <div
      className="flex-container-handwrittenArea"
      id="capture"
      style={{ backgroundImage: `url(${whichPage})` }}
      ref={handwrittenAreaRef}
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
            width: `${settings.handWrittenWidth}px`,
            wordSpacing: `${settings.wordSpacing}px`,
          }}
        >
          {inputValue}
        </p>
      </div>
    </div>
  );
}

export default HandwritingArea;
