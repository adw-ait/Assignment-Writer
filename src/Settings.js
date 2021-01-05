import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import FontFamily from "./FontFamily";
import FontSize from "./FontSize";
import InkColor from "./InkColor";
import LazyLoadedComponents from "./LazyLoadedComponents";
import PageChooser from "./PageChooser";

function Settings() {
  return (
    <div className="flex-container-Settings">
      <PageChooser />
      <FontFamily />
      <FontSize />
      <InkColor />
      <Suspense fallback={<Skeleton />}>
        <LazyLoadedComponents />
      </Suspense>
    </div>
  );
}

export default Settings;
