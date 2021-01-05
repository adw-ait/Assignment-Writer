import React from "react";

const LetterSpacing = React.lazy(() => import("./LetterSpacing"));
const LineHeight = React.lazy(() => import("./LineHeight"));
const WritingAreaWidth = React.lazy(() => import("./WritingAreaWidth"));
const AxisManage = React.lazy(() => import("./AxisManage"));
const DownloadPage = React.lazy(() => import("./DownloadPage"));

function LazyLoadedComponents() {
  return (
    <React.Fragment>
      <LetterSpacing />
      <LineHeight />
      <WritingAreaWidth />
      <AxisManage />
      <DownloadPage />
    </React.Fragment>
  );
}

export default LazyLoadedComponents;
