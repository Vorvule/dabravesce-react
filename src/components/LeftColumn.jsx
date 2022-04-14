import React from "react";
import { Menu } from "./LeftColumn/Menu";
import { DailyGospel } from "./Daily/DailyGospel";

export const LeftColumn = () => {
  return (
    <nav id="LeftColumn" className="w3-col l3 w3-hide-small w3-hide-medium">
      <div id="LeftColumn_Content" className="w3-round w3-padding">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <Menu />
        {window.innerWidth < 993 ? <DailyGospel /> : ""}
        <br />
      </div>
    </nav>
  );
};
