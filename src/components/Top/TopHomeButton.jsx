import React from "react";
import { showMiddleColumnContent } from "../../functions/show_middle_column_content";

const TopHomeButton = () => {
  return (
    <span
      className="w3-bar-item w3-button w3-padding-large w3-theme-d4 w3-large"
      title="Пачатак"
      onClick={() => showMiddleColumnContent(0, 0, 0)}
    >
      <i className="fa fa-home"></i>
      <strong className="w3-hide-medium w3-hide-small w3-margin-left">
        Дабравесце
      </strong>
    </span>
  );
};

export default TopHomeButton;
