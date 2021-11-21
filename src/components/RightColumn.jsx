import React from "react";

function RightColumn() {
  return (
    <div className="w3-col m2">
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img
            src="/w3images/forest.jpg"
            alt="Forest"
            style={{ width: "100%" }}
          ></img>
          <p>
            <strong>Holiday</strong>
          </p>
          <p>Friday 15:00</p>
          <p>
            <button className="w3-button w3-block w3-theme-l4">Info</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
