import React from "react";

import { Mobile } from "../../../Common/Mobile";

export const TopMiddleButton = () => {
  return (
    <span
      id="MiddleButton"
      title="Дабравесце"
      className="w3-bar-item w3-large w3-hide-large"
      onClick={() => Mobile.showColumnById("MiddleColumn")}
    >
      <i className="fa fa-book fa-fw w3-xlarge w3-margin-right"></i>
      <strong>Дабравесце</strong>
    </span>
  );
};
