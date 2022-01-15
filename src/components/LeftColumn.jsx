import React, { useEffect } from "react";
import Menu from "./LeftColumn/Menu";

const LeftColumn = () => {
  useEffect(() => {});

  return (
    <div id="LeftColumn" className="w3-col l3 w3-hide-small w3-hide-medium">
      <div id="LeftColumn_Content" className="w3-round w3-white w3-padding">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <Menu />
        <br />
      </div>
    </div>
  );
};

export default LeftColumn;
