import React from "react";
import MenuVolumes from "./menu/MenuVolumes";
import Menu from "./menu/Menu";

import content from "../tomes/content";

import gospels from "../tomes/new_testament_gospels";
import apostols from "../tomes/new_testament_apostles";

// const volumes = [gospels, apostols];

const LeftColumn = () => {
  return (
    <div className="w3-col m3">
      <div className="w3-card w3-round w3-white w3-container">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <Menu volumeList={content} />
        <MenuVolumes volume={gospels} />
        <MenuVolumes volume={apostols} />
      </div>
    </div>
  );
};

export default LeftColumn;
