import React from "react";

import { MenuAlbumList } from "./MenuAlbumList";
import { allAlbums } from "../../../albums/albums";

export const Menu = ({ setKeys }) => (
  <ul className="w3-ul">
    <MenuAlbumList albumList={allAlbums} setKeys={setKeys} />
  </ul>
);
