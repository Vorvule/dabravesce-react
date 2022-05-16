import React, { useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Core } from "../Common/Core";
import { HeaderH4 } from "../Headers/HeaderH4";
import { HeaderH5 } from "../Headers/HeaderH5";
import { Mobile } from "../Common/Mobile";
import { ShareIcons } from "./ShareIcons";
import { UrlPath } from "../Common/UrlPath";

export const MiddleColumn = ({ keys }) => {
  const [
    albumName,
    bookName,
    chapterName,
    chapterJsx,
    paragraphs,
    audioSource,
  ] = Core.getContent(keys);

  useEffect(() => {
    window.scrollTo(0, 0);
    Mobile.showColumnById("MiddleColumn");

    Core.setTitle(bookName, chapterName);
    Core.setDescription(albumName, bookName, chapterName);
    
    const keysFromHistory = keys[3];
    !keysFromHistory && UrlPath.pushKeysToHistory(keys);
  });

  return (
    <div id="MiddleColumn" className="w3-col l6 w3-padding w3-animate-bottom">
      <HeaderH4 header={albumName} />
      <HeaderH5 header={bookName} />

      <h6 className="w3-center">
        <strong>{chapterJsx}</strong>
      </h6>

      <ShareIcons keys={keys} />
      {audioSource && <AudioPlayer source={audioSource} />}

      <div>{paragraphs}</div>
    </div>
  );
};
