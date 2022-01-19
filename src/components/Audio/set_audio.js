const setAudio = () => {
  const AudioElement = document.getElementById("AudioPlayer");
  const SourceElement = document.getElementById("AudioSource");

  SourceElement.src = "";
  AudioElement.load();
  AudioElement.classList.add("w3-hide");

  const albumIndex = +localStorage.albumIndex;
  const bookIndex = +localStorage.bookIndex;
  const chapterIndex = +localStorage.chapterIndex;

  let BookFolder, FileName;

  switch (albumIndex) {
    case 0: // gospels
      switch (bookIndex) {
        case 0:
          BookFolder = "matt";
          break;
        case 1:
          BookFolder = "mark";
          break;
        case 2:
          BookFolder = "luke";
          break;
        case 3:
          BookFolder = "john";
          break;
        default:
          return;
      }
      FileName = (chapterIndex + 1).toString();
      break;

    // case 2: apostles
    // case 3: epistles

    case 3: // prayers
      BookFolder = "pray";
      switch (bookIndex) {
        case 0: // everyday prayers
          switch (chapterIndex) {
            case 0:
              FileName = "morning";
              break;
            case 1:
              FileName = "evening";
              break;
            // 2. Different prayers: no audio
            default:
              return;
          }
          break;

        // case 1: Eucharist prayers (no audio)
        // case 2: Easter prayers (no audio)

        case 3: // worships
          switch (chapterIndex) {
            case 0:
              FileName = "liturgy";
              break;
            case 1:
              FileName = "moleben";
              break;
            case 2:
              FileName = "requiem";
              break;
            default:
              return; // fallback
          }
          break;
        default:
          return;
      }
      break;

    case 4: // songs
      BookFolder = "song";
      let correctionNumber = 0;
      switch (bookIndex) {
        case 1:
          correctionNumber = 6;
          break;
        case 2:
          correctionNumber = 13;
          break;
        case 3:
          correctionNumber = 20;
          break;
        default:
          correctionNumber = 0;
      }
      FileName = (chapterIndex + 1 + correctionNumber).toString();
      break;

    default:
      return; // contacts and fallback
  }

  if (FileName.length < 2) FileName = "0" + FileName;

  AudioElement.classList.remove("w3-hide");
  const audioUrl = `https://www.dabravesce.by/audio/${BookFolder}/${FileName}.mp3`;
  SourceElement.src = audioUrl;
  AudioElement.load();
};

export { setAudio };
