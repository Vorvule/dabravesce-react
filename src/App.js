import { useState } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

import { Daily } from "./components/RightColumn/Daily/Daily";
import { UrlPath } from "./components/Common/UrlPath";

export const App = () => {
  const urlKeys = UrlPath.getKeys();
  const dailyKeys = Daily.getKeys();

  const [keys, setKeys] = useState(urlKeys || dailyKeys);

  window.onpopstate = () => {
    setKeys([...urlKeys, true]);
  };
  
  window.setKeys = setKeys;

  return (
    <div className="App">
      <Top />
      <Columns keys={keys} />
      <Footer keys={keys} />
    </div>
  );
};
