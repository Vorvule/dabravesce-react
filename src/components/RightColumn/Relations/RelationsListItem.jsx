import React from "react";

export const RelationsListItem = ({
  title,
  url,
  extraClasses,
  briefText,
  fullText,
}) => {
  const classes = extraClasses + " fa fa-fw w3-margin-right w3-large";

  return (
    <li title={title} onClick={() => window.open(url)}>
      <i className={classes} aria-hidden="true"></i>
      <span className="w3-hide-small w3-hide-medium">{fullText}</span>
      <span className="w3-hide-large">{briefText}</span>
    </li>
  );
};
