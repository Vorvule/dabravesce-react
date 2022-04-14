import React from "react";
import { DailyGospel } from "./Daily/DailyGospel";
import { Hest } from "./RightColumn/Hest";

const RightColumn = () => {
  return (
    <aside className="w3-col l3 w3-hide-medium w3-hide-small">
      <DailyGospel />
      <Hest />
    </aside>
  );
};

export { RightColumn };
