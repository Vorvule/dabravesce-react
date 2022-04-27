import React from "react";

export const TopButton = ({ addedClasses, title, clickHandler, fa }) => {
  const spanClasses = "w3-bar-item " + addedClasses;
  const iClasses = "fa fa-fw w3-xlarge " + fa;

  return (
    <span className={spanClasses} title={title} onClick={clickHandler}>
      <i className={iClasses}></i>
    </span>
  );
};
