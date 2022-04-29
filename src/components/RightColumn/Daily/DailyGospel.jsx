import React, { useEffect } from "react";
import { showDailyGospel } from "./showDailyGospel";
import { showCore } from "../../MiddleColumn/core/showCore";
import { getDailyKeys } from "./getDailyKeys";

export const DailyGospel = () => {
  useEffect(() => {
    showDailyGospel();
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
          onClick={() => showCore(...getDailyKeys())}
        ></strong>
      </div>

      <div id="RightColumn_DailySource" className="w3-right-align"></div>
      
      <br />
    </div>
  );
};
