import React, { useEffect } from "react";
import { showRightColumn_Hest } from "../functions/show_right_column_hest";

const RightColumn = () => {
  useEffect(() => {
    showRightColumn_Hest();
  });
  return (
    <div className="w3-col l3 w3-hide-medium w3-hide-small">
      <div className="w3-white w3-padding">
        <h4 className="w3-center">
          <strong>Слова Божае</strong>
        </h4>
        <hr />
        <div id="RightColumn_HestVerses"></div>
        <div id="RightColumn_HestSource" className="w3-right-align"></div>
        <br />
      </div>
    </div>
  );
};

export default RightColumn;
