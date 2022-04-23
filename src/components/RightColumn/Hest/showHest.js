import { allAlbums } from "../../../albums/albums";
import { hestKeys } from "./hestKeys";
import { randomInteger } from "../../Common/randomInteger";

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
  // const chapterName = bookContent[chapterIndex].name;
  const chapterContent =
    bookContent[chapterIndex][1] || bookContent[chapterIndex].text;

  let hestVerses =
    "<i class='fa fa-quote-right w3-margin-right' aria-hidden='true'></i>";
  const pattern = new RegExp(/\d+\. /);
  versesArray.forEach((verse) => {
    const clearVerse = chapterContent[verse].replace(pattern, "");
    hestVerses += `<span>${clearVerse}</span>`;
  });

  const hestSource = `<strong>
    ${bookBriefName} ${chapterIndex + 1}:${versesArray[0] + 1}
    </strong>`;

  document.getElementById("RightColumn_HestVerses").innerHTML = hestVerses;
  document.getElementById("RightColumn_HestSource").innerHTML = hestSource;
};

export { showHest };
