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
  window.setKeys = setKeys;

  // from History
  window.onpopstate = () => {
    Core.setContent(UrlPath.getKeys(), false);
    // keys shouldn't be pushed to History again
  };

  return (
    <div className="App">
      <Top />
      <Columns keys={keys} />
      <Footer keys={keys} />
    </div>
  );
}
