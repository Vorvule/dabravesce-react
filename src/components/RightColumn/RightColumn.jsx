import React from "react";
import { DailyGospel } from "./Daily/DailyGospel";
import { Hest } from "./Hest/Hest";
import { Relations } from "./Relations/Relations";

export const RightColumn = () => {
  return (
    <aside id="RightColumn" className="w3-col l3 w3-hide-medium w3-hide-small">
      <DailyGospel />
      <Hest />
      <Relations />
    </aside>
  );
};
