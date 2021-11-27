import React from "react";
import MenuVolumes from "./MenuVolumes";

const Menu = ({ volumeList }) =>
  volumeList.map((oneVolume, index) => {
    return <MenuVolumes volume={oneVolume} index={index} />;
  });

export default Menu;
