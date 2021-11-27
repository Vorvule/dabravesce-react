import React from "react";
import MenuBooks from "./MenuBooks";

const MenuVolumes = ({ volume }) => {
  // console.log(volume);
  return (
    <ul className="w3-ul">
      <li key={"volume-0"}>{volume[0]}</li>
      <MenuBooks bookList={volume[1]} />
    </ul>
  );
};
export default MenuVolumes;
