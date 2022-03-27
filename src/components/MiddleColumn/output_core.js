import { reduceParagraphs } from "./reduce_paragraphs";

const outputCore = (albumName, bookName, chapterName, chapterText) => {
  document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
  document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
  document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
  document.getElementById("MiddleColumn_ChapterParagraphs").innerHTML =
  reduceParagraphs(chapterText);
};

export { outputCore };
