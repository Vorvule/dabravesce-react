import React from "react";

const handleTabButtonClick = (activeTabIndex) => {
  const allFooterTabs = document.querySelectorAll(".footer-tab");
  allFooterTabs.forEach((tab) => tab.classList.add("w3-hide"));
  allFooterTabs[activeTabIndex].classList.remove("w3-hide");
};

const TopTabButtons = () => {
  return (
    <>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Рух"
        onClick={() => handleTabButtonClick(0)}
      >
        <i className="fa fa-arrows"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Рух
        </strong>
      </span>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Шырыць"
        onClick={() => handleTabButtonClick(1)}
      >
        <i className="fa fa-share-alt"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Шырыць
        </strong>
      </span>
      <span
        className="w3-bar-item w3-button w3-padding-large w3-hover-white w3-large"
        title="Пошук"
        onClick={() =>
          document.getElementById("searchMenu").classList.toggle("w3-hide")
        }
      >
        <i className="fa fa-search"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Пошук
        </strong>
      </span>
    </>
  );
};

export default TopTabButtons;
