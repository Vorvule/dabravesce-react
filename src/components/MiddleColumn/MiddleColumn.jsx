import React, { useEffect } from "react";
import { getSearchKeys } from "./keys/getSearchKeys";
import { getDailyKeys } from "../RightColumn/Daily/getDailyKeys";
import { showCore } from "./core/showCore";

import { ShareIcons } from "./share/ShareIcons";
import { AudioPlayer } from "./audio/AudioPlayer";

export const MiddleColumn = () => {
  useEffect(() => {
    const keys = getSearchKeys() || getDailyKeys();
    showCore(...keys);
    localStorage.innerWidth = window.innerWidth;
  });

  return (
    <div
      id="MiddleColumn"
      className="w3-col l6 w3-padding"
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
