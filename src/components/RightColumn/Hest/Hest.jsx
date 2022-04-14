import React, { useEffect } from "react";
import { showHest } from "./showHest";

const Hest = () => {
  useEffect(() => {
    showHest();
  });
  return (
    <div className="w3-padding">
      <h4 className="w3-center">
        <strong>Слова Божае</strong>
      </h4>
      <hr />
      <div id="RightColumn_HestVerses"></div>
      <div id="RightColumn_HestSource" className="w3-right-align"></div>
      <br />
    </div>
  );
};

export { Hest };
