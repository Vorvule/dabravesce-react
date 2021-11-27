import React from "react";
import MenuBooks from "./MenuBooks";

const MenuVolumes = ({ volume, index }) => {
  return (
    <ul className="w3-ul">
      <li key={"volume-" + index}>{volume[0]}</li>
      <MenuBooks bookList={volume[1]} />
    </ul>
  );
};
export default MenuVolumes;
