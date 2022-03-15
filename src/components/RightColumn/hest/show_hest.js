import { allAlbums } from "../../../albums/albums";
import { hestKeys } from "./hest_keys";
import { randomInteger } from "../../Common/random_integer";

const showHest = () => {
  const hestCount = hestKeys.length;
  const randomHestIndex = randomInteger(0, hestCount);
  const randomHestKeys = hestKeys[randomHestIndex];

  // const albumIndex = randomHestKeys.albumKey;
  const bookIndex = randomHestKeys.bookKey;
  const chapterIndex = randomHestKeys.chapterKey;
  const versesArray = randomHestKeys.verseKeys;

  // const albumName = allAlbums[albumIndex].name;
  const albumContent = allAlbums[0].text; // Gospel
  const bookBriefName = albumContent[bookIndex].idBe;
  const bookContent = albumContent[bookIndex].text;
  // const chapterName = bookContent[chapterIndex][0];
  const chapterContent = bookContent[chapterIndex][1];

  let hestVerses = "";
  const pattern = new RegExp(/\d+\. /);
  versesArray.forEach((verse) => {
    const clearVerse = chapterContent[verse].replace(pattern, "");
    hestVerses += `<p>${clearVerse}</p>`;
  });

  const hestSource = `<strong>
    ${bookBriefName} ${chapterIndex + 1}:${versesArray[0] + 1}
    </strong>`;

  document.getElementById("RightColumn_HestVerses").innerHTML = hestVerses;
  document.getElementById("RightColumn_HestSource").innerHTML = hestSource;
};

export { showHest };
