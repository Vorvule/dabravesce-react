import React from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Core } from "../Common/Core";
import { ShareIcons } from "./ShareIcons";

export const MiddleColumn = ({ keys }) => {
  console.log(keys)
  const [album, book, chapter, paragraphs, source] = Core.getContent(...keys);

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
      <ShareIcons keys={keys} />
      {source && <AudioPlayer source={source} />}
      <div id="MiddleColumn_ChapterParagraphs">{paragraphs}</div>
    </div>
  );
};
