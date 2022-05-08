import { useState } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

import { Core } from "./components/Common/Core";
import { UrlPath } from "./components/Common/UrlPath";
import { Daily } from "./components/RightColumn/Daily/Daily";

export function App() {
  const [keys, setKeys] = useState(UrlPath.getKeys() || Daily.getKeys());

  window.onpopstate = () => {
    // invoked from History
    Core.setContent(setKeys, UrlPath.getKeys(), false);
    // false means keys shouldn't be pushed to History again
  };

  return (
    <div className="App">
      <Top setKeys={setKeys} />
      <Columns keys={keys} setKeys={setKeys} />
      <Footer keys={keys} setKeys={setKeys} />
    </div>
  );
}
