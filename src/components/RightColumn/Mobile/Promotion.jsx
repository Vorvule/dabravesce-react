import React from "react";

import { PromotionList } from "./PromotionList";

export const Promotion = () => {
  return (
    <div className="w3-hide-large">
      <h5 className="w3-center">
        <strong>Распаўсюд</strong>
      </h5>
  
      <PromotionList />
      <br />
    </div>
  );
};
