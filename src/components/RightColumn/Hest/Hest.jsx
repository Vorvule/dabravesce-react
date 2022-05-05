import React, { useEffect } from "react";
import { Hests } from "./Hests";

export const Hest = () => {
  useEffect(() => {
    Hests.showHest();
  });

  return (
    <div className="w3-padding">
      <h4 className="w3-center">
        <strong>Слова Божае</strong>
      </h4>

      <hr />

      <div>
        <i className="fa fa-quote-right w3-margin-right" aria-hidden="true"></i>
        <span id="HestVerses"></span>
      </div>

      <div className="w3-right-align">
        <span id="HestSource"></span>
      </div>
      
      <br />
    </div>
  );
};
