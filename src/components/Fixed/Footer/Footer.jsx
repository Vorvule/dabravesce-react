import React from "react";

import { FooterArrows } from "./FooterArrows/FooterArrows";

export const Footer = ({ keys, setKeys }) => {
  return (
    <div className="w3-bottom">
      <footer className="w3-bar w3-blue-gray">
        <FooterArrows keys={keys} setKeys={setKeys} />
      </footer>
    </div>
  );
};
