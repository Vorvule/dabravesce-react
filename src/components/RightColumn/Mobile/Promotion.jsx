import React from "react";

import { PromotionList } from "./PromotionList";

export const Promotion = () => {
  return (
    <div className="w3-padding w3-hide-large">
      <h4 className="w3-center">
        <strong>Распаўсюд</strong>
      </h4>
      <hr />
      
      <PromotionList />
      <br />
    </div>
  );
};
