import allAlbums from "../albums/all_albums";
import { outputMiddleColumnContent } from "./output_middle_column_content";

const showMiddleColumnContent = (albumIndex, bookIndex, chapterIndex) => {
  const albumName = allAlbums[albumIndex].name;
  const albumText = allAlbums[albumIndex].text;

  const bookName = albumText[bookIndex].name;
  const bookText = albumText[bookIndex].text;

  const chapterName = bookText[chapterIndex][0];
  const chapterText = bookText[chapterIndex][1];

  outputMiddleColumnContent(albumName, bookName, chapterName, chapterText);
};

export { showMiddleColumnContent };
