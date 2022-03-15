import React from "react";
import { nextChapter } from "../Footer/FooterArrows/next_chapter";
import { prevChapter } from "../Footer/FooterArrows/prev_chapter";

const FooterArrows = () => {
  return (
    <div className="w3-center footer-tab">
      <span className="w3-large w3-padding" onClick={prevChapter}>
        <i className="fa fa-arrow-left w3-margin"></i>
        <strong className="w3-hide-small">Назад</strong>
      </span>
      <span
        className="w3-large w3-padding"
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fa fa-arrow-up w3-margin"></i>
        <strong className="w3-hide-medium w3-hide-small">Уверх</strong>
      </span>
      <span
        className="w3-large w3-padding"
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
      >
        <i className="fa fa-arrow-down w3-margin"></i>
        <strong className="w3-hide-medium w3-hide-small">Долу</strong>
      </span>
      <span className="w3-large w3-padding" onClick={nextChapter}>
        <i className="fa fa-arrow-right w3-margin"></i>
        <strong className="w3-hide-small">Далей</strong>
      </span>
    </div>
  );
};

export { FooterArrows };
