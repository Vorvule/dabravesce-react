import React from "react";

function MiddleColumn() {
  return (
    <div className="w3-col m7">
      <div className="w3-container w3-card w3-white w3-round w3-margin">
        <br />
        <img
          src="/w3images/avatar2.png"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right"
          style={{ width: "60" }}
        ></img>
        <span className="w3-right w3-opacity">1 min</span>
        <h4>John Doe</h4>
        <hr className="w3-clear" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="w3-row-padding" style={{ margin: "0 -16" }}>
          <div className="w3-half">
            <i className="fa fa-arrow-left"></i> Назад
          </div>
          <div className="w3-half">
            Далей <i className="fa fa-arrow-right"></i>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default MiddleColumn;
