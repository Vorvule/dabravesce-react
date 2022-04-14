import React, { useEffect } from "react";
import { showDailyGospel } from "./showDailyGospel";
import { showCore } from "../MiddleColumn/showCore";
import { getDailyKeys } from "./getDailyKeys";
import { toggleShowCore } from "../Common/toggleShowCore";

const DailyGospel = () => {
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
        <i className="fa fa-link w3-margin-right" aria-hidden="true"></i>
        <span
          className="w3-hover-text-blue-gray"
          id="RightColumn_DailyGospel"
          onClick={() => {
            showCore(...getDailyKeys());
            window.innerWidth < 993 && toggleShowCore();
          }}
        ></span>
      </div>
      <div id="RightColumn_DailySource" className="w3-right-align"></div>
      <br />
    </div>
  );
};

export { DailyGospel };
