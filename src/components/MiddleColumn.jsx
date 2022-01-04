import React from "react";
import BottomArrows from "./BottomArrows";

function MiddleColumn() {
  return (
    <div className="w3-col m6">
      <div className="w3-card w3-round w3-white w3-container w3-margin-left w3-margin-right">
        <h4 className="w3-center">
          <strong id="MiddleColumn_AlbumName"></strong>
        </h4>
        <h5 className="w3-center">
          <strong id="MiddleColumn_BookName"></strong>
        </h5>
        <h6 className="w3-center">
          <strong id="MiddleColumn_ChapterName"></strong>
        </h6>
        <div id="MiddleColumn_ChapterText"></div>
        <hr />
        <BottomArrows />
      </div>
    </div>
  );
}

export default MiddleColumn;
