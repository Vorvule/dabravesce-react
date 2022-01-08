import React from "react";

const BottomArrows = () => {
  return (
    <div className="w3-center bottom-arrows">
      <i className="fa fa-arrow-left w3-margin-right"></i>
      <strong className="w3-hide-small">Назад</strong>
      <i className="fa fa-arrow-up w3-margin"></i>
      <strong className="w3-hide-small w3-hide-medium">Уверх</strong>
      <i className="fa fa-circle w3-margin w3-hide-small"></i>
      <strong className="w3-hide-small w3-hide-medium">Долу</strong>
      <i className="fa fa-arrow-down w3-margin"></i>
      <strong className="w3-hide-small">Далей</strong>
      <i className="fa fa-arrow-right w3-margin-left"></i>
    </div>
  );
};

export default BottomArrows;
