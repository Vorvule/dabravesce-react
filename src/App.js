import { useState } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

// import { Core } from "./components/Common/Core";
import { UrlPath } from "./components/Common/UrlPath";
import { Daily } from "./components/RightColumn/Daily/Daily";

export function App() {
  const [keys, setKeys] = useState(UrlPath.getKeys() || Daily.getKeys());

  window.onpopstate = () => {
    setKeys(UrlPath.getKeys());
    // Core.show(...UrlPath.getKeys(), false);
    // false: keys are taken from history
    // and shouldn't be pushed there again
  };

  return (
    <div className="App">
      <Top setKeys={setKeys} />
      <Columns keys={keys} setKeys={setKeys} />
      <Footer keys={keys} setKeys={setKeys} />
    </div>
  );
}
