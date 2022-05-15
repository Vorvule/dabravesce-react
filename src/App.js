import { useState, useEffect } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

import { Core } from "./components/Common/Core";
import { UrlPath } from "./components/Common/UrlPath";
import { Daily } from "./components/RightColumn/Daily/Daily";

export function App() {
  const startKeys = UrlPath.getKeys() || Daily.getKeys();
  const [keys, setKeys] = useState(startKeys);
  window.setKeys = setKeys;

  useEffect(() => {
    UrlPath.pushKeys(...keys);
  }, []);

  // from History; keys shouldn't be pushed to History again
  window.onpopstate = () => {
    Core.setContent(UrlPath.getKeys(), false);
  };

  return (
    <div className="App">
      <Top />
      <Columns keys={keys} />
      <Footer keys={keys} />
    </div>
  );
}
