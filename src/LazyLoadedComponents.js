import React from "react";

const WordSpacing = React.lazy(() => import("./WordSpacing"));
const LetterSpacing = React.lazy(() => import("./LetterSpacing"));
const LineHeight = React.lazy(() => import("./LineHeight"));
// const WritingAreaWidth = React.lazy(() => import("./WritingAreaWidth"));
const AxisManage = React.lazy(() => import("./AxisManage"));
const DownloadPage = React.lazy(() => import("./DownloadPage"));

function LazyLoadedComponents() {
  return (
    <React.Fragment>
      <LetterSpacing />
      <LineHeight />
      {/* <WritingAreaWidth /> */}
      <AxisManage />
      <WordSpacing />
      <DownloadPage />
    </React.Fragment>
  );
}

export default LazyLoadedComponents;
