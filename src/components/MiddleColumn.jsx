import React, { useEffect } from "react";
import BottomArrows from "./BottomArrows";
import { showMiddleColumnContent } from "../functions/show_middle_column_content";

function MiddleColumn() {
  useEffect(() => {
    showMiddleColumnContent(0, 0, 0);
  });

  return (
    <div className="w3-col m6">
      <div className="w3-card w3-round w3-white w3-container w3-margin-left w3-margin-right">
        <h4 className="w3-center">
          <strong id="MiddleColumn_AlbumName"></strong>
        </h4>
        <hr />
        <h5 className="w3-center">
          <strong id="MiddleColumn_BookName"></strong>
        </h5>
        <h6 className="w3-center">
          <strong id="MiddleColumn_ChapterName"></strong>
        </h6>
        <div id="MiddleColumn_ChapterText"></div>
        <BottomArrows />
      </div>
    </div>
  );
}

export default MiddleColumn;
