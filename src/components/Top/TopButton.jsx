import React from "react";

export const TopButton = ({ classes, title, handler, fa }) => {
  const spanClasses = "w3-bar-item " + classes;
  const iClasses = "fa fa-fw w3-xlarge " + fa;

  return (
    <span className={spanClasses} title={title} onClick={handler}>
      <i className={iClasses}></i>
    </span>
  );
};
