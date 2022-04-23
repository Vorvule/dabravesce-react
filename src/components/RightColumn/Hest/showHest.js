import { allAlbums } from "../../../albums/albums";
import { hestKeys } from "./hestKeys";
import { randomInteger } from "../../Common/randomInteger";

export const showHest = () => {
  const randomIndex = randomInteger(0, hestKeys.length);
  const chosenHestKeys = hestKeys[randomIndex];

  // const albumIndex = randomHestKeys.albumKey;
  const bookIndex = chosenHestKeys.bookKey;
  const chapterIndex = chosenHestKeys.chapterKey;
  const versesArray = chosenHestKeys.verseKeys;

  // const albumName = allAlbums[albumIndex].name;
  const albumContent = allAlbums[0].text; // Gospel
  const bookIdBe = albumContent[bookIndex].idBe;
  const bookContent = albumContent[bookIndex].text;
  // const chapterName = bookContent[chapterIndex].name;
  const chapterContent =
    bookContent[chapterIndex][1] || bookContent[chapterIndex].text;

  document.getElementById("HestVerses").innerHTML = hestVerses(
    versesArray,
    chapterContent
  );
  document.getElementById("HestSource").innerHTML = hestSource(
    bookIdBe,
    chapterIndex,
    versesArray
  );
};

/* ****** */

const hestSource = (bookBriefName, chapterIndex, versesArray) => {
  return `${bookBriefName} ${chapterIndex + 1}:${versesArray[0] + 1}`;
};

const hestVerses = (versesArray, chapterContent) => {
  let verses = "";
  const pattern = new RegExp(/\d+\. /);
  versesArray.forEach((verse) => {
    verses += chapterContent[verse].replace(pattern, "") + " ";
  });
  return verses;
};
