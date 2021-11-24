import React from "react";
import BottomArrows from "./BottomArrows";
import testament from "../tomes/new_testament_new_header";

function MenuList(props) {
  const tomeName = props.tome[0];
  const tomeContent = props.tome[1];
  // console.log(tomeName);
  // console.log(tomeContent);

  const bookNames = tomeContent.map((book, index) => {
    // console.log(book[0][0]); // book names

    book.map((partNames) => {
      console.log(partNames[0]);
    });
  });

  // const chapterNames = tomeContent.map((book) => {
  //   console.log(book[1][0]);
  // });

  const items = props.tome;
  const listItems = items.map((tome, index) => {
    return <li key={index.toString()}>{tome}</li>;
  });
  return <ul>{listItems}</ul>;
}

function MiddleColumn() {
  return (
    <div className="w3-col m6">
      <div className="w3-card w3-round w3-white w3-container w3-margin-left w3-margin-right">
        <h4 className="w3-center">
          <strong>Евангелле</strong>
        </h4>
        <hr />
        <MenuList tome={testament} />
        <BottomArrows />
      </div>
    </div>
  );
}

export default MiddleColumn;
