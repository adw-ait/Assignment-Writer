import React, { useContext, useState } from "react";
import { AppContext } from "./App";

function PageChooser() {
  const { handlePageChoose } = useContext(AppContext);
  const [pageChoose, setpageChoose] = useState("blank");
  const handleSelectPage = (e) => {
    setpageChoose(e.target.value);
    handlePageChoose(e.target.value);
  };
  return (
    <div className="flex-container-Settings-Items">
      <h2>Choose Page</h2>
      <select
        className="Settings-select"
        value={pageChoose}
        onChange={(e) => handleSelectPage(e)}
      >
        <option value="blank">Blank</option>
        <option value="ruled">Ruled</option>
      </select>
    </div>
  );
}

export default PageChooser;
