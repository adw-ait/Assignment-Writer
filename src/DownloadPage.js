import html2canvas from "html2canvas";
import React from "react";
import FileSaver, { saveAs } from "file-saver";

function DownloadPage() {
  const handleDownload = () => {
    window.scrollTo(0, 0);
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      canvas.toBlob((blob) => {
        FileSaver.saveAs(blob, "Assignment_screenshot.png");
      });
    });
  };
  return (
    <button
      className="DownloadBtn"
      onClick={() => {
        handleDownload();
      }}
    >
      DOWNLOAD
    </button>
  );
}

export default DownloadPage;
