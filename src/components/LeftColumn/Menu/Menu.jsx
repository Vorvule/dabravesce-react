import React from "react";

import { allAlbums } from "../../../albums/albums";

import { MenuAlbumList } from "./MenuAlbumList";

export const Menu = ({ setKeys }) => (
  <ul className="w3-ul">
    <MenuAlbumList albumList={allAlbums} setKeys={setKeys} />
  </ul>
);
