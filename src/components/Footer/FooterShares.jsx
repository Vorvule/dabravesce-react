import React from "react";
import { shareSocial } from "./FooterShares_shareSocial";

const FooterShares = () => {
  return (
    <div className="w3-center footer-tab">
      <span
        target="_blank"
        className="w3-large w3-padding"
        onClick={() => shareSocial("twitter")}
      >
        <i className="fa fa-twitter w3-margin"></i>
        <strong className="w3-hide-small">Twitter</strong>
      </span>

      <span
        target="_blank"
        className="w3-large w3-padding"
        onClick={() => shareSocial("telegram")}
      >
        <i className="fa fa-paper-plane w3-margin"></i>
        <strong className="w3-hide-small">Telegram</strong>
      </span>

      <span
        target="_blank"
        className="w3-large w3-padding"
        onClick={() => shareSocial("facebook")}
      >
        <i className="fa fa-facebook w3-margin"></i>
        <strong className="w3-hide-small">Facebook</strong>
      </span>
    </div>
  );
};

export default FooterShares;
