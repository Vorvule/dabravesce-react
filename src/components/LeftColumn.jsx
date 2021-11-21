import React from "react";

const LeftColumn = () => {
  return (
    <div className="w3-col m3">
      <div className="w3-card w3-round w3-white w3-container">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <p>
          <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
          Designer, UI
        </p>
        <p>
          <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
          London, UK
        </p>
        <p>
          <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{" "}
          April 1, 1988
        </p>
      </div>
    </div>
  );
};

export default LeftColumn;
