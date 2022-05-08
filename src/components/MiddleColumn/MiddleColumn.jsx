import React, { useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Core } from "../Common/Core";
// import { Daily } from "../RightColumn/Daily/Daily";
import { ShareIcons } from "./ShareIcons";
// import { UrlPath } from "../Common/UrlPath";

export const MiddleColumn = ({ keys }) => {
  const [album, book, chapter, paragraphs, source] = Core.getContent(...keys);

  useEffect(() => {
    // const keys = UrlPath.getKeys() || Daily.getKeys();
    // Core.show(...keys);
  });

  return (
    <div id="MiddleColumn" className="w3-col l6 w3-padding w3-animate-bottom">
      <h4 className="w3-center">
        <strong id="MiddleColumn_AlbumName">{album}</strong>
      </h4>
      <hr />
      <h5 className="w3-center w3-section">
        <strong id="MiddleColumn_BookName">{book}</strong>
      </h5>
      <h6 className="w3-center">
        <strong id="MiddleColumn_ChapterName">{chapter}</strong>
      </h6>
      <ShareIcons />
      {source && <AudioPlayer source={source} />}
      <div id="MiddleColumn_ChapterParagraphs">{paragraphs}</div>
    </div>
  );
};
