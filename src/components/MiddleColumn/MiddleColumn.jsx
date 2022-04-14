import React, { useEffect } from "react";
import { getSearchKeys } from "./keys/getSearchKeys";
import { getDailyKeys } from "../Daily/getDailyKeys";
import { showCore } from "./showCore";
import { ShareIcons } from "./ShareIcons/ShareIcons";
import { AudioPlayer } from "../Audio/AudioPlayer";

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

export { MiddleColumn };
