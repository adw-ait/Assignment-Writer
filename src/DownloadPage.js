import html2canvas from "html2canvas";
import React from "react";
import FileSaver from "file-saver";

function DownloadPage() {
  const handleDownload = () => {
    window.scrollTo(0, 0);
    let el = document.querySelector("#capture");
    let cloned = el.cloneNode(true);
    cloned.style.display = "block";
    document.body.appendChild(cloned);
    html2canvas(cloned, { height: 1122.519685, width: 793.700787 }).then(
      (canvas) => {
        canvas.toBlob((blob) => {
          FileSaver.saveAs(blob, "Assignemnt_Screenshot.png");
        });
        cloned.style.display = "none";
      }
    );
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
