import React, { useEffect } from "react";

import { Hests } from "./Hests";

export const Hest = () => {
  useEffect(() => {
    Hests.showHest();
  });

  return (
    <>
      <h5 className="w3-center">
        <strong>Слова Божае</strong>
      </h5>

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
