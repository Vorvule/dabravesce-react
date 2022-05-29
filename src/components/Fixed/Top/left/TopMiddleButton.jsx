import React from "react";

import { Cols } from "../../../Common/Cols";

export const TopMiddleButton = () => {
  return (
    <span
      id="MiddleButton"
      title="Дабравесце"
      className="w3-bar-item w3-large w3-hide-large"
      onClick={() => Cols.showColumnById("MiddleColumn")}
    >
      <i className="fa fa-book fa-fw w3-xlarge w3-margin-right"></i>
      <strong>Дабравесце</strong>
    </span>
  );
};
