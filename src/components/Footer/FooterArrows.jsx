import React from "react";
import nextChapter from "../../functions/footer/next_chapter";
import prevChapter from "../../functions/footer/prev_chapter";

const FooterArrows = () => {
  return (
    <div className="w3-center">
      <span onClick={prevChapter}>
        <i className="fa fa-arrow-left w3-margin-right"></i>
        <strong className="w3-hide-small">Назад</strong>
      </span>

      <span onClick={() => window.scrollTo(0, 0)}>
        <i className="fa fa-arrow-up w3-margin"></i>
        <strong className="w3-hide-small w3-hide-medium">Уверх</strong>
      </span>

      <i className="fa fa-circle w3-margin w3-hide-small"></i>

      <span onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        <strong className="w3-hide-small w3-hide-medium">Долу</strong>
        <i className="fa fa-arrow-down w3-margin"></i>
      </span>

      <span onClick={nextChapter}>
        <strong className="w3-hide-small">Далей</strong>
        <i className="fa fa-arrow-right w3-margin-left"></i>
      </span>
    </div>
  );
};

export default FooterArrows;
