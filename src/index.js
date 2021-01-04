import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import "./fonts.css";
import GithubCorner from "react-github-corner";

ReactDOM.render(
  <React.StrictMode>
    <GithubCorner
      size={100}
      href={"https://github.com/adw-ait/Assignment-Writer"}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
