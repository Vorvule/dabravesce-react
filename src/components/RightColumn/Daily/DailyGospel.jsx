import React, { useEffect } from "react";

import { Core } from "../../MiddleColumn/Core";
import { Daily } from "./Daily";

export const DailyGospel = () => {
  useEffect(() => {
    Daily.showDaily();
  });

  return (
    <div className="w3-padding">
      <h4 className="w3-center">
        <strong>Евангелле дня</strong>
      </h4>
      <hr />

      <div>
        <i className="fa fa-bell-o w3-margin-right" aria-hidden="true"></i>
        <strong
          className="w3-text-blue-gray"
          id="RightColumn_DailyGospel"
          onClick={() => Core.show(...Daily.getKeys())}
        ></strong>
      </div>

      <div id="RightColumn_DailySource" className="w3-right-align"></div>
      
      <br />
    </div>
  );
};
