import React, { useState } from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList, onToggle }) => {
  const initialCollapseState = {
    Gospels: false,
    Apostles: false,
    Epistles: false,
  };
  const [collapsedState, setCollapsedState] = useState(initialCollapseState);

  const toggleCollapse = (idEn) => {
    collapsedState[idEn] = !collapsedState[idEn];
    setCollapsedState(() => collapsedState);
  };

  return volumeList.map((volume) => {
    return (
      <div key={volume.idEn}>
        <li onClick={() => toggleCollapse(volume.idEn)}>{volume.name}</li>
        <ul className={`w3-ul ${collapsedState[volume.idEn] && "w3-hide"}`}>
          <MenuBookList bookList={volume.text} />
        </ul>
      </div>
    );
  });
};

export default MenuVolumeList;
