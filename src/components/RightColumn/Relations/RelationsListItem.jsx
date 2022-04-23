import React from "react";

export const RelationsListItem = ({
  title,
  url,
  faClass,
  constantText,
  hidableText,
}) => {
  const classes = faClass + " fa fa-fw w3-margin-right w3-large";

  return (
    <li title={title} onClick={() => window.open(url)}>
      <i className={classes} aria-hidden="true"></i>
      <span className="hidable">{hidableText}</span>
      <span>{constantText}</span>
    </li>
  );
};
