import React from "react";
import MenuAlbumList from "./MenuAlbumList";
import allAlbums from "../../albums/Albums";

const Menu = () => (
  <ul className="w3-ul">
    <MenuAlbumList albumList={allAlbums} />
  </ul>
);

export default Menu;
