import React from "react";
import MenuVolumeList from "./MenuVolumeList";
import allVolumes from "../../tomes/all_volumes";

const toggleShowVolume = (idEn) => {
  console.log("toggle", idEn);
};

const Menu = () => (
  <ul className="w3-ul">
    <MenuVolumeList volumeList={allVolumes} onToggle={toggleShowVolume} />
  </ul>
);

export default Menu;
