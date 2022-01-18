import { reduceChapterParagraphs } from "./reduce_chapter_paragraphs";

const outputMiddleColumnContent = (
  albumName,
  bookName,
  chapterName,
  chapterText
) => {
  const chapterParagraphs = reduceChapterParagraphs(chapterText);

  document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
  document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
  document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
  document.getElementById("MiddleColumn_ChapterParagraphs").innerHTML =
    chapterParagraphs;
};

export { outputMiddleColumnContent };
