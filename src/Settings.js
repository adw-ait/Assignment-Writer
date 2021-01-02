import React from "react";
import AxisManage from "./AxisManage";
import DownloadPage from "./DownloadPage";
import FontFamily from "./FontFamily";

import FontSize from "./FontSize";
import InkColor from "./InkColor";
import LetterSpacing from "./LetterSpacing";
import LineHeight from "./LineHeight";

function Settings() {
  return (
    <div className="flex-container-Settings">
      <LetterSpacing />
      <AxisManage />
      <FontSize />
      <LineHeight />
      <InkColor />
      <FontFamily />

      <DownloadPage />
    </div>
  );
}

export default Settings;
