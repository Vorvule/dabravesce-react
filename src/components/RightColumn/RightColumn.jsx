import React from "react";
import { HeaderH4 } from "../Headers/HeaderH4";

import { DailyGospel } from "./Daily/DailyGospel";
import { Hest } from "./Hest/Hest";
import { Promotion } from "./Mobile/Promotion";

export const RightColumn = () => {
  return (
    <aside
      id="RightColumn"
      className="w3-col l3 w3-hide-medium w3-hide-small w3-animate-right"
    >
      <div className="w3-padding">
        <HeaderH4 header="Дзённае" />
        <DailyGospel />
        <Hest />
        <Promotion />
      </div>
    </aside>
  );
};
