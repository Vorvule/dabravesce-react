import React from "react";

import { Core } from "../../Common/Core";
import { Daily } from "./Daily";

export const DailyGospel = () => {
  return (
    <>
      <h5 className="w3-center">
        <strong>Евангелле дня</strong>
      </h5>
      <div>
        <i className="fa fa-bell-o w3-margin-right" aria-hidden="true"></i>
        <strong
          className="w3-text-blue-gray"
          onClick={() => Core.setContent(Daily.getKeys())}
        >
          {Daily.getLink()}
        </strong>
      </div>
      <br />
    </>
  );
};
