import React from "react";

const TopTabButtons = () => {
  return (
    <>
      <span
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Пераход"
      >
        <i className="fa fa-arrows w3-margin-right"></i>Пераход
      </span>
      <span
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Шырыць"
      >
        <i className="fa fa-share-alt w3-margin-right"></i>Шырыць
      </span>
      <span
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Пошук"
      >
        <i className="fa fa-search w3-margin-right"></i>Пошук
      </span>
    </>
  );
};

// const handleBarsButtonClick = () => {
//   toggleMenuAndCore();

//   if (getWindowWidth() < 993) {
//     document
//       .getElementById("LeftColumn_Content")
//       .classList.remove("w3-margin-right");
//   }
// };

export default TopTabButtons;
