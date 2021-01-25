import html2canvas from "html2canvas";
import React from "react";
// import FileSaver from "file-saver";
import jsPDF from "jspdf";

function DownloadPage() {
  const handleDownload = (e) => {
    const whichBtn = e.target.name;
    window.scrollTo(0, 0);
    let el = document.querySelector("#capture");
    let cloned = el.cloneNode(true);
    cloned.style.display = "block";
    document.body.appendChild(cloned);
    html2canvas(cloned).then((canvas) => {
      if (whichBtn === "image") {
        // canvas.toBlob((blob) => {
        //   FileSaver.saveAs(blob, "Assignment.png");
        // });
      } else if (whichBtn === "pdf") {
        var imgData = canvas.toDataURL("image/jpeg");
        var pdf = new jsPDF();
        var height = pdf.internal.pageSize.getHeight();
        var width = pdf.internal.pageSize.getWidth();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save("Assignment.pdf");
      }

      cloned.style.display = "none";
    });
  };
  return (
    <div className="DownloadBtn-Container">
      <button
        className="DownloadBtn"
        name="image"
        disabled
        onClick={(e) => {
          handleDownload(e);
        }}
      >
        IMAGE
      </button>
      <button
        className="DownloadBtn"
        name="pdf"
        onClick={(e) => {
          handleDownload(e);
        }}
      >
        PDF
      </button>
    </div>
  );
}

export default DownloadPage;
