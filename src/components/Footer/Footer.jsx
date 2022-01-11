import React from "react";
import FooterArrows from "./FooterArrows";
import FooterSearch from "./FooterSearch";
import FooterShares from "./FooterShares";

const Footer = () => {
  return (
    <footer className="w3-bottom w3-container w3-center w3-theme-d5">
      <FooterArrows />
      <FooterShares />
      <FooterSearch />
    </footer>
  );
};

export default Footer;
