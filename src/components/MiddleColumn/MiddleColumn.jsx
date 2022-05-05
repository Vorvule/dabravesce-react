import React, { useEffect } from "react";

import { ShareIcons } from "./share/ShareIcons";
import { AudioPlayer } from "./AudioPlayer";
import { UrlPath } from "./UrlPath";
import { Core } from "./Core";
import { Daily } from "../RightColumn/Daily/Daily";

export const MiddleColumn = () => {
  useEffect(() => {
    const keys = UrlPath.getKeys() || Daily.getKeys();
    Core.show(...keys);
  });

  return (
    <div
      id="MiddleColumn"
      className="w3-col l6 w3-padding w3-animate-bottom"
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
