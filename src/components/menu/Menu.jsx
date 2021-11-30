import React from "react";
import MenuVolumeList from "./MenuVolumeList";
import allVolumes from "../../tomes/all_volumes";

const Menu = () => (
  <ul className="w3-ul">
    <MenuVolumeList volumeList={allVolumes} />
  </ul>
);

export default Menu;
