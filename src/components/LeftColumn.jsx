import React from "react";
import Menu from "./LeftColumn/Menu";

const LeftColumn = () => {
  return (
    <div className="w3-col l3 w3-hide-small w3-hide-medium" id="LeftColumn">
      <div className="w3-card w3-round w3-white w3-container w3-margin-right">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <Menu />
      </div>
    </div>
  );
};

export default LeftColumn;
