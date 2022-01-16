import { createChapterCore } from "./create_chapter_core";

const outputMiddleColumnContent = (
  albumName,
  bookName,
  chapterName,
  chapterText
) => {
  const chapterCore = createChapterCore(chapterText);

  document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
  document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
  document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
  document.getElementById("MiddleColumn_ChapterCore").innerHTML = chapterCore;
};

export { outputMiddleColumnContent };
