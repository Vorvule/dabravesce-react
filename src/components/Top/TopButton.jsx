import React from "react";

export const TopButton = ({ addedClasses, title, clickHandler, fa }) => {
  const classes = "w3-bar-item " + addedClasses;
  const extraClasses = "fa w3-xlarge " + fa;

  return (
    <span className={classes} title={title} onClick={clickHandler}>
      <i className={extraClasses}></i>
    </span>
  );
};
