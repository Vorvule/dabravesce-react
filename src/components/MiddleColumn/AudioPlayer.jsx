import React, { useRef } from "react";

export const AudioPlayer = ({ source }) => {
  const audioPlayer = useRef();

  if (audioPlayer.current) audioPlayer.current.load();

  return (
    <audio
      className="w3-border w3-border-grey"
      ref={audioPlayer}
      preload="auto"
      controls
    >
      <source id="AudioSource" src={source} type="audio/mpeg"></source>
    </audio>
  );
};
