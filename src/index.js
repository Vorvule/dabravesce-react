import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getUrlKeys } from "./components/MiddleColumn/keys/get_url_keys";
import { showCore } from "./components/MiddleColumn/show_core";

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
  localStorage.keysFromHistory = "true";
  showCore(...getUrlKeys());
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
      console.log('Service Worker register success', regInfo)
    } catch (e) {
      console.log('Service Worker register fail')
    }
  }
});
