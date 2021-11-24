import React from "react";
import newTestament from "../tomes/new_testament_new";

const Menu = (props, index) => {
  return <li key={index.toString()}>{props.book[0]}</li>;
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
            <Menu key="0" book={chapter[0]} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftColumn;
