import React, { useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Core } from "../Common/Core";
import { HeaderH4 } from "../Headers/HeaderH4";
import { HeaderH5 } from "../Headers/HeaderH5";
import { Mobile } from "../Common/Mobile";
import { ShareIcons } from "./ShareIcons";
import { UrlPath } from "../Common/UrlPath";

export const MiddleColumn = ({ keys }) => {
  const [album, book, chapter, paragraphs, source] = Core.getContent(keys);

  useEffect(() => {
    Mobile.showColumnById("MiddleColumn");
    console.log(keys)
    !keys[3] && UrlPath.pushKeys(keys);
  });

  return (
    <div id="MiddleColumn" className="w3-col l6 w3-padding w3-animate-bottom">
      <HeaderH4 header={album} />
      <HeaderH5 header={book} />

      <h6 className="w3-center">
        <strong>{chapter}</strong>
      </h6>

      <ShareIcons keys={keys} />
      {source && <AudioPlayer source={source} />}

      <div>{paragraphs}</div>
    </div>
  );
};
