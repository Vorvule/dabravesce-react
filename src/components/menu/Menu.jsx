import React from "react";
import MenuBooks from "./MenuBooks";

const Menu = ({ volume }) => (
  <ul className="w3-ul">
    <li key={"volume-0"}>{volume[0]}</li>
    <MenuBooks volume={volume[1]} />
  </ul>
);

export default Menu;
