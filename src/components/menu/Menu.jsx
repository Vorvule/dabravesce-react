import React from "react";
import MenuVolumes from "./MenuVolumes";

const Menu = ({ volumeList }) =>
  volumeList.map((oneVolume) => {
    return <MenuVolumes volume={oneVolume} />;
  });

export default Menu;
