import React, { useState } from "react";
import HandwritingArea from "./HandwritingArea";
import Typearea from "./Typearea";
import Settings from "./Settings";
import AwIcon from "./resources/images/assignmentWriter.png";

export const AppContext = React.createContext();

function App() {
  const [inputValue, setinputValue] = useState("hello\nworld");
  const [handWrittenText, sethandWrittenText] = useState(inputValue);
  const [settings, setsettings] = useState({
    letterSpacing: 0,
    axis: { x: 0, y: 0 },
    fontSize: 55,
    lineHeight: 45,
    inkColor: "black",
    fontFamily: "customFont1",
    bgPage: "page1",
  });

  // ********************* HANDLER FUNCTIONS *********************

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
      }}
    >
      <div className="Header-Container">
        <h2
          className="header"
          style={{
            fontFamily: `${settings.fontFamily}`,
          }}
        >
          Assignment Writer
        </h2>
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
