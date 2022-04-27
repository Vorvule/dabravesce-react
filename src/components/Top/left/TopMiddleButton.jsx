import React from "react";
import { showOneColumnWithId } from "../../context/showOneColumnWithId";
import { showCore } from "../../MiddleColumn/core/showCore";

export const TopMiddleButton = () => {
  return (
    <span
      title="Дабравесце"
      className="w3-bar-item w3-large w3-hide-large"
      onClick={() => handleClick("MiddleColumn")}
    >
      <i className="fa fa-book fa-fw w3-xlarge w3-margin-right"></i>
      <strong>Дабравесце</strong>
    </span>
  );
};

const handleClick = (id) => {
  window.innerWidth < 993 ? showOneColumnWithId(id) : showCore(0, 0, 0);
};
