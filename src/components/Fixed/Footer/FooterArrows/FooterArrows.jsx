import React from "react";
import { FaButton } from "../../FaButton";
import { nextChapter } from "./nextChapter";
import { prevChapter } from "./prevChapter";

export const FooterArrows = () => {
  return (
    <div id="Arrows" className="w3-content">
      <FaButton
        title="Назад"
        strong="Назад"
        fa="fa-arrow-left"
        handler={() => prevChapter()}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Уверх"
        strong="Уверх"
        fa="fa-chevron-up"
        handler={() => window.scrollTo(0, 0)}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Долу"
        strong="Долу"
        fa="fa-chevron-down"
        handler={() => window.scrollTo(0, document.body.scrollHeight)}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Далей"
        strong="Далей"
        fa="fa-arrow-right"
        handler={() => nextChapter()}
        classes="w3-large w3-center"
      />
    </div>
  );
};
