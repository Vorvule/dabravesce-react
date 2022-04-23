import React from "react";

export const LinkItem = ({ title, url, fa, constantText, hidableText }) => {
  const classes = fa + " fa w3-margin-right w3-xlarge";

  return (
    <li title={title} onClick={() => window.open(url)}>
      <i className={classes} aria-hidden="true"></i>
      <span>{constantText}</span>
      <span className="hidable">{hidableText}</span>
    </li>
  );
};
