import React, { useEffect } from "react";

import { HeaderH5 } from "../../Headers/HeaderH5";
import { Hests } from "./Hests";

export const Hest = () => {
  useEffect(() => {
    Hests.showHest();
  });

  return (
    <>
      <HeaderH5 header="Слова Божае" />
      
      <div>
        <i className="fa fa-quote-right w3-margin-right" aria-hidden="true"></i>
        <span id="HestVerses"></span>
      </div>

      <div className="w3-right-align">
        <span id="HestSource"></span>
      </div>
      
      <br />
    </>
  );
};
