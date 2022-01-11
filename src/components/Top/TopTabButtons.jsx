import React from "react";

const TopTabButtons = () => {
  return (
    <>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Рух"
      >
        <i className="fa fa-arrows"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Рух
        </strong>
      </span>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Шырыць"
      >
        <i className="fa fa-share-alt"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Шырыць
        </strong>
      </span>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Пошук"
      >
        <i className="fa fa-search"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Пошук
        </strong>
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
