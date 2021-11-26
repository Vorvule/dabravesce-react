import React from "react";
import testament from "../tomes/new_testament_gospels";
import apostols from "../tomes/new_testament_apostles";

const Menu = (props) => {
  const volumeName = <li>{props.volume[0]}</li>;
  const volumeContent = props.volume[1];

  let bookNames = volumeContent.map((aVolume, ind) => {
    let chapterNames = aVolume[1].map((bookContent, index) => {
      return <li key={"chapter-" + index}>{bookContent[0]}</li>;
    });

    return (
      <>
        <li key={"book-" + ind}>{aVolume[0][0]}</li>
        {chapterNames}
      </>
    );
  });

  return (
    <div>
      {volumeName}
      <ul>{bookNames}</ul>
    </div>
  );
};

function RightColumn() {
  return (
    <div className="w3-col m3">
      <div className="w3-card w3-round w3-white w3-container w3-center">
        <h4 className="w3-center">
          <strong>Запаветы</strong>
        </h4>
        <hr />
        <Menu volume={testament} />
        <Menu volume={apostols} />

        <p>Upcoming Events</p>
      </div>
    </div>
  );
}

export default RightColumn;
