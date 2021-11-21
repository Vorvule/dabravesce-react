import React from "react";

const BottomArrows = () => {
  return (
    <div className="w3-row-padding w3-center w3-section bottom-arrows">
      <br />
      <div className="w3-half">
        <i className="fa fa-arrow-left w3-margin-right"></i>
        <strong>Назад</strong>
      </div>
      <div className="w3-half">
        <strong>Далей</strong>

        <i className="fa fa-arrow-right w3-margin-left"></i>
      </div>
    </div>
  );
};

export default BottomArrows;
