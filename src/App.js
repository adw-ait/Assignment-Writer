import React, { useEffect, useRef, useState } from "react";
import HandwritingArea from "./HandwritingArea";
import Typearea from "./Typearea";

import AwIcon from "./resources/images/assignmentWriter.png";
import GithubCorner from "react-github-corner";
import Settings from "./Settings";

export const AppContext = React.createContext();

function App() {
  const [inputValue, setinputValue] = useState("hello\nworld");
  const [handWrittenText, sethandWrittenText] = useState(inputValue);
  const [isMobile, setisMobile] = useState(false);
  const handwrittenAreaRef = useRef(null);
  const [handwrittenAreaWidth, sethandwrittenAreaWidth] = useState(
    handwrittenAreaRef
  );

  const [settings, setsettings] = useState({
    letterSpacing: 0,
    axis: { x: 0, y: 0 },
    fontSize: 55,
    lineHeight: 45,
    inkColor: "black",
    fontFamily: "customFont1",
    bgPage: "blank",
    wordSpacing: 0,
    handWrittenWidth: handwrittenAreaRef,
  });

  //** Detect Mobile display */
  useEffect(() => {
    const screenWidth = window.outerWidth;

    if (screenWidth <= 500) {
      setisMobile(true);
    }
  }, [isMobile]);

  // ********************* HANDLER FUNCTIONS *********************

  //** Word spacing */
  const handleWordSpacing = (e) => {
    setsettings({ ...settings, wordSpacing: e.target.value });
  };

  //** Handwriting area width */
  const handleWidth = (e) => {
    setsettings({ ...settings, handWrittenWidth: e.target.value });
  };

  //** PAGE CHOOSER */
  const handlePageChoose = (e) => {
    setsettings({ ...settings, bgPage: e });
  };

  //**FONT FAMILY */
  const handleFontFamily = (e) => {
    setsettings({ ...settings, fontFamily: e });
  };
  //** INK COLOR */
  const handleColorChange = (e) => {
    setsettings({ ...settings, inkColor: e });
  };
  //** LINE HEIGHT */
  const handleLineHeight = (e) => {
    setsettings({ ...settings, lineHeight: e.target.value });
  };

  //** FONT SIZE */
  const handleFontSize = (e) => {
    setsettings({ ...settings, fontSize: e });
  };

  //** AXIS CHANGE */
  const handleAxisChange = (e) => {
    const axisName = e.target.name;
    if (axisName === "x-axis") {
      setsettings({
        ...settings,
        axis: { ...settings.axis, x: e.target.value },
      });
    } else if (axisName === "y-axis") {
      setsettings({
        ...settings,
        axis: { ...settings.axis, y: e.target.value },
      });
    }
  };

  //** LETTER SPACING */
  const handleLetterSpacing = (e) => {
    setsettings({ ...settings, letterSpacing: e.target.value });
  };

  //** INPUT CHANGE */
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
    sethandWrittenText(inputValue);
  };
  // ********************* END OF HANDLER FUNCTIONS *********************
  return (
    <AppContext.Provider
      value={{
        handleInputChange,
        inputValue,
        handWrittenText,
        settings,
        handleLetterSpacing,
        handleAxisChange,
        handleFontSize,
        handleLineHeight,
        handleColorChange,
        handleFontFamily,
        handlePageChoose,
        handwrittenAreaRef,
        sethandwrittenAreaWidth,
        handwrittenAreaWidth,
        handleWidth,
        handleWordSpacing,
      }}
    >
      {isMobile ? null : (
        <GithubCorner
          size={100}
          href={"https://github.com/adw-ait/Assignment-Writer"}
          direction={"right"}
        />
      )}
      <div className="Header-Container">
        <p
          className="header"
          style={{
            fontFamily: `${settings.fontFamily}`,
          }}
        >
          Assignment Writer
        </p>
        <img className="header-img" src={AwIcon} alt="assignment writer" />
      </div>
      <div className="flex-container-main">
        <div className="flex-container-typeArea_Settings">
          <Typearea />
          <Settings />
        </div>
        <HandwritingArea />
      </div>
    </AppContext.Provider>
  );
}

export default App;
