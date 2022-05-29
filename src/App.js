import { useState } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

import { Keys } from "./components/Common/Keys";
import { Cols } from "./components/Common/Cols";

export const App = () => {
  const [cols, setCols] = useState(Cols.getInitial());
  window.setCols = setCols;

  const [keys, setKeys] = useState(Keys.getInitial());
  window.setKeys = setKeys;

  window.onpopstate = () => {
    const keysFromHistory = true;
    setKeys([...Keys.getKeys(), keysFromHistory]);
  };

  // window.onresize = () => {
  //   if (window.innerWidth > 992) {
  //     document.getElementById("MiddleColumn").classList.remove("w3-hide");
  //   }
  // };

  return (
    <div className="App">
      <Top />
      <Columns keys={keys} cols={cols} />
      <Footer keys={keys} />
    </div>
  );
};
