import React from "react";
import AxisManage from "./AxisManage";
import FontSize from "./FontSize";
import LetterSpacing from "./LetterSpacing";
import LineHeight from "./LineHeight";

function Settings() {
  return (
    <div className="flex-container-Settings">
      <LetterSpacing />
      <AxisManage />
      <FontSize />
      <LineHeight />
    </div>
  );
}

export default Settings;
