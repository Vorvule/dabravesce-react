import React from "react";
import BottomArrows from "./BottomArrows";

function MiddleColumn() {
  return (
    <div className="w3-col m6">
      <div className="w3-card w3-round w3-white w3-container w3-margin-left w3-margin-right">
        <h4 className="w3-center">
          <strong>Евангелле</strong>
        </h4>
        <hr />
        <BottomArrows />
      </div>
    </div>
  );
}

export default MiddleColumn;
