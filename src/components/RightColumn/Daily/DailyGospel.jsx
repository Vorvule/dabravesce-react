import React from "react";

import { Core } from "../../Common/Core";
import { HeaderH5 } from "../../Headers/HeaderH5";
import { Daily } from "./Daily";

export const DailyGospel = () => {
  return (
    <>
      <HeaderH5 header="Евангелле дня" />
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
