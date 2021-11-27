import React from "react";
import MenuVolumes from "./MenuVolumes";
import allVolumes from "../../tomes/all_volumes";

const Menu = () => (
  <ul className="w3-ul">
    <MenuVolumes volumeList={allVolumes} />
  </ul>
);

export default Menu;
