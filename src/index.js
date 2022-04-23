import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { reportWebVitals } from "./reportWebVitals";
import { getSearchKeys } from "./components/MiddleColumn/keys/getSearchKeys";
import { showCore } from "./components/MiddleColumn/core/showCore";

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
  // false = when we show core from history,
  // don't push keys there any more
  showCore(...getSearchKeys(), false);
};

window.onresize = () => {
  if (window.innerWidth !== +localStorage.innerWidth) {
    window.location.reload();
    localStorage.innerWidth = window.innerWidth;
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
