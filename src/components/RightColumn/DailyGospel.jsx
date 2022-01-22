import React, { useEffect } from "react";
import { showDailyGospel } from "./daily/show_daily_gospel";
import { showCore } from "../MiddleColumn/show_core";
import { getDailyKeys } from "./daily/get_daily_keys";
import { toggleShowCore } from "./../Common/toggle_show_core";

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
            showCore(0, ...getDailyKeys());
            if (window.innerWidth < 993) toggleShowCore();
          }}
        ></span>
      </div>
      <div id="RightColumn_DailySource" className="w3-right-align"></div>
      <br />
    </div>
  );
};

export default DailyGospel;
