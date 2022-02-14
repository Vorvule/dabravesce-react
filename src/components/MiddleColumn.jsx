import React, { useEffect } from "react";
import { getSearchKeys } from "./MiddleColumn/keys/get_search_keys";
import { getDailyKeys } from "./Daily/get_daily_keys";
import { showCore } from "./MiddleColumn/show_core";
import ShareIcons from "./MiddleColumn/ShareIcons";
import AudioPlayer from "./Audio/AudioPlayer";

const MiddleColumn = () => {
  useEffect(() => {
    const keys = getSearchKeys() || getDailyKeys();
    showCore(...keys);
    localStorage.innerWidth = window.innerWidth;
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
      <h5 className="w3-center w3-section">
        <strong id="MiddleColumn_BookName"></strong>
      </h5>
      <h6 className="w3-center">
        <strong id="MiddleColumn_ChapterName"></strong>
      </h6>
      <ShareIcons />
      <AudioPlayer />
      <div id="MiddleColumn_ChapterParagraphs"></div>
    </div>
  );
};

export default MiddleColumn;
