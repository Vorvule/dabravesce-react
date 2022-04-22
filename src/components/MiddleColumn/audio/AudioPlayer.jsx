import React from "react";

const AudioPlayer = () => {
  return (
    <audio
      id="AudioPlayer"
      className="w3-border w3-border-grey"
      controls
      preload="auto"
    >
      <source id="AudioSource" src="" type="audio/mpeg"></source>
    </audio>
  );
};

export { AudioPlayer };
