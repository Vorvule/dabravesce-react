import { getChapterText } from "./getChapterText";

const outputCore = (albumName, bookName, chapterName, chapterText) => {
  const text = getChapterText(chapterText);

  document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
  document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
  document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
  document.getElementById("MiddleColumn_ChapterParagraphs").innerHTML = text;

  setTitle(bookName, chapterName);
  setDescription(albumName, bookName, chapterName);
};

// ======

const setDescription = (albumName, bookName, chapterName) => {
  const description = albumName + ", " + bookName + ", " + chapterName;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);
};

const setTitle = (bookName, chapterName) => {
  const chapter = chapterName.split("<br />")[0];
  const title = "Дабравесце — " + bookName + ", " + chapter;
  document.title = title;
};

// ======

export { outputCore };
