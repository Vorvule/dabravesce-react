import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

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
