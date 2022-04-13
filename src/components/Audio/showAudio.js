import { allAlbums } from "../../albums/albums";

const showAudio = (albumIndex, bookIndex, chapterIndex) => {
  const AudioElement = document.getElementById("AudioPlayer");
  const SourceElement = document.getElementById("AudioSource");

  const audioSource =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex].audio;

  SourceElement.src = audioSource ? "/audio/" + audioSource : "";
  
  audioSource
    ? AudioElement.classList.remove("w3-hide")
    : AudioElement.classList.add("w3-hide");

  AudioElement.load();
};

export { showAudio };
