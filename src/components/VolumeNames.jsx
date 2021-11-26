import React from "react";
import BookNames from "./BookNames";

const VolumeNames = (props) => {
  props.volume.map((vol, index) => {
    let bookNames = <BookNames bookContent={vol[1]} />;
    // volume name
    return <li key={"volume-" + index}>{vol[0]}</li>;
  });
};

export default VolumeNames;
