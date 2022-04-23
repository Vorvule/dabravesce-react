import React from "react";
import { showCore } from "../MiddleColumn/core/showCore";

export const TopHomeButton = () => {
  return (
    <span
      className="w3-bar-item w3-padding-large w3-large w3-hide-medium w3-hide-small w3-right"
      title="У пачатак"
      onClick={() => showCore(0, 0, 0)}
    >
      <i className="fa fa-home"></i>
      <strong className="w3-margin-left">Дамоў</strong>
    </span>
  );
};
