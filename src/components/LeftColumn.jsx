import React from "react";
import newTestament from "../tomes/new_testament_new";

const Menu = (props) => {
  return <li>{props.book}</li>;
};

const LeftColumn = () => {
  return (
    <div className="w3-col m3">
      <div className="w3-card w3-round w3-white w3-container">
        <h4 className="w3-center">
          <strong>Змест</strong>
        </h4>
        <hr />
        <ul>
          {newTestament.map((chapter) => (
            <Menu book={chapter[0][0]} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
