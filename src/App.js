import React, { useState } from "react";
import HandwritingArea from "./HandwritingArea";
import Typearea from "./Typearea";
import "./style.css";
import Settings from "./Settings";

export const AppContext = React.createContext();

function App() {
  const [inputValue, setinputValue] = useState("hello\nworld");
  const [handWrittenText, sethandWrittenText] = useState(inputValue);
  const [settings, setsettings] = useState({
    letterSpacing: 0,
    axis: { x: 0, y: 0 },
    fontSize: 55,
    lineHeight: 45,
  });

  // ********************* HANDLER FUNCTIONS *********************
  const handleLineHeight = (e) => {
    setsettings({ ...settings, lineHeight: e.target.value });
  };
  const handleFontSize = (e) => {
    setsettings({ ...settings, fontSize: e });
  };
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
  const handleLetterSpacing = (e) => {
    setsettings({ ...settings, letterSpacing: e.target.value });
  };

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
      }}
    >
      <h2>Assignment Writer</h2>
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
