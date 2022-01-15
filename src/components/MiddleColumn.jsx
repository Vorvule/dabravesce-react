import React, { useEffect } from "react";
import { showMiddleColumnContent } from "../functions/show_middle_column_content";

const MiddleColumn = () => {
  useEffect(() => {
    showMiddleColumnContent(0, 0, 0);
  });

  return (
    <div
      id="MiddleColumn"
      className="w3-col l6 w3-padding w3-border-left w3-border-right"
    >
      <h4 className="w3-center">
        <strong id="MiddleColumn_AlbumName"></strong>
      </h4>
      <hr />
      <h5 className="w3-center">
        <strong id="MiddleColumn_BookName"></strong>
      </h5>
      <h6 className="w3-center w3-padding-16">
        <strong id="MiddleColumn_ChapterName"></strong>
      </h6>
      <div id="MiddleColumn_ChapterCore"></div>
    </div>
  );
};

export default MiddleColumn;
