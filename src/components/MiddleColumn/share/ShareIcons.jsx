import React from "react";
import { shareSocial } from "./shareSocial";

export const ShareIcons = () => {
  return (
    <div className="w3-center share-container">
      <div className="w3-padding" onClick={() => shareSocial("twitter")}>
        <i className="fa fa-twitter w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Twitter</div>
      </div>

      {/* <div className="w3-padding" onClick={() => shareSocial("telegram")}>
        <i className="fa fa-telegram w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Telegram</div>
      </div> */}

      <div className="w3-padding" onClick={() => shareSocial("facebook")}>
        <i className="fa fa-facebook w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Facebook</div>
      </div>
    </div>
  );
};
