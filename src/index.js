import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { reportWebVitals } from "./reportWebVitals";

import { UrlPath } from "./components/MiddleColumn/keys/UrlPath";
import { Core } from "./components/MiddleColumn/core/Core";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.onpopstate = () => {
  // false = keys shouldn't be pushed to history when they are taken from there (onpopstate) to show core
  Core.show(...UrlPath.getKeys(), false);
};

window.onresize = () => {
  if (window.innerWidth > 992) {
    document.getElementById("MiddleColumn").classList.remove("w3-hide");
  }
};

window.addEventListener("load", async () => {
  if (navigator.serviceWorker) {
    try {
      const regInfo = await navigator.serviceWorker.register(
        "./service-worker.js"
      );
      console.log("Service Worker register success", regInfo);
    } catch (e) {
      console.log("Service Worker register fail");
    }
  }
});
