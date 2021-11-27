import React from "react";

const Menu = ({ volume }) => {
  const volumeName = <li key={"volume-0"}>{volume[0]}</li>;
  const volumeContent = volume[1];

  const bookNames = volumeContent.map((aVolume, ind) => {
    const chapterNames = aVolume[1].map((bookContent, index) => {
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
      <ul>{volumeName}</ul>
      <ul>{bookNames}</ul>
    </div>
  );
};

export default Menu;
