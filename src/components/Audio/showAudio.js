import { allAlbums } from "../../albums/albums";

const showAudio = (albumIndex, bookIndex, chapterIndex) => {
  const AudioElement = document.getElementById("AudioPlayer");
  const SourceElement = document.getElementById("AudioSource");

  const audioSource =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex].audio;

  if (audioSource) {
    // const audioUrl = `https://www.dabravesce.by/audio/${BookFolder}/${FileName}.mp3`;
    SourceElement.src = "/audio/" + audioSource;
    AudioElement.load();
    AudioElement.classList.remove("w3-hide");
  } else {
    SourceElement.src = "";
    AudioElement.load();
    AudioElement.classList.add("w3-hide");
  }
};

export { showAudio };
