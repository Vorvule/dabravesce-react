import React from "react";

import { Core } from "../../Common/Core";
import { Daily } from "./Daily";

export const DailyGospel = ({ setKeys }) => {
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
          onClick={() => Core.setContent(setKeys, Daily.getKeys())}
        >
          {Daily.getLink()}
        </strong>
      </div>
      <br />
    </div>
  );
};
