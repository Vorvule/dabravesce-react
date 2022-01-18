import React from "react";
import FooterArrows from "./FooterArrows";
import FooterShares from "./FooterShares";
import FooterWrench from "./FooterWrench";

const Footer = () => {
  return (
    <footer className="w3-bottom w3-container w3-center w3-theme-d5">
      <FooterArrows />
      <FooterShares />
      <FooterWrench />
    </footer>
  );
};

export default Footer;
