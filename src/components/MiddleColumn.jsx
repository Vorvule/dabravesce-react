import React, { useEffect } from "react";
import { showCore } from "./MiddleColumn/show_core";
import { getUrlKeys } from "./MiddleColumn/keys/get_url_keys";
import AudioPlayer from "./Audio/AudioPlayer";

const MiddleColumn = () => {
  useEffect(() => {
    showCore(...getUrlKeys());
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
      <AudioPlayer />
      <div id="MiddleColumn_ChapterParagraphs"></div>
    </div>
  );
};

export default MiddleColumn;
