import React from "react";
import MenuVolumeList from "./MenuVolumeList";
import allVolumes from "../../tomes/all_volumes";

const Menu = () => (
  <ul key="menu-ul" className="w3-ul">
    <MenuVolumeList key="menu" volumeList={allVolumes} />
  </ul>
);

export default Menu;
