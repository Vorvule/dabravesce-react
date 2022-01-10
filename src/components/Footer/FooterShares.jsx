import React from "react";

const FooterShares = () => {
  return (
    <div className="w3-center">
      <span onClick={prevChapter}>
        <i className="fa fa-twitter w3-margin-right"></i>
        <strong className="w3-hide-small">Twitter</strong>
      </span>

      <span onClick={() => shareSocial("Telegram")}>
        <i className="fa fa-paper-plane w3-margin"></i>
        <strong className="w3-hide-small w3-hide-medium">Telegram</strong>
      </span>

      <span onClick={nextChapter}>
        <strong className="w3-hide-small">Facebook</strong>
        <i className="fa fa-facebook w3-margin-left"></i>
      </span>
    </div>
  );
};

export default FooterShares;
