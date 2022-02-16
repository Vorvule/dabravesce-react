import React from "react";
import FooterArrows from "./FooterArrows";
import FooterWrench from "./FooterWrench";

export const Footer = () => {
  return (
    <footer className="w3-bottom w3-container w3-center w3-blue-gray">
      <FooterArrows />
      <FooterWrench />
    </footer>
  );
};
