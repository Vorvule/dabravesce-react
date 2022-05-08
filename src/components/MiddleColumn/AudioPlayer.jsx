import React from "react";

export const AudioPlayer = ({ source}) => {
  return (
    <audio
      id="AudioPlayer"
      className="w3-border w3-border-grey"
      controls
      preload="auto"
    >
      <source id="AudioSource" src={source} type="audio/mpeg"></source>
    </audio>
  );
};
