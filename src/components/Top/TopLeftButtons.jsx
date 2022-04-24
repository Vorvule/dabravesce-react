import React from "react";
import { TopButton } from "./TopButton";

export const TopLeftButtons = () => {
  const android = "https://play.google.com/store/apps/details?id=by.dabravesce";
  const github = "https://github.com/Vorvule/dabravesce-react";

  return (
    <>
      <TopButton
      addedClasses="w3-hide-medium w3-hide-small"
        title="Дачыненне на Android"
        clickHandler={() => window.open(android)}
        fa="fa-android"
      />
    </>
  );
};
