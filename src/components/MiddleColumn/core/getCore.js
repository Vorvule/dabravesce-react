import { allAlbums } from "../../../albums/albums";

export const getCore = (albumIndex, bookIndex, chapterIndex) => {
  const albumName = allAlbums[albumIndex].name;
  const albumText = allAlbums[albumIndex].text;

  const bookName = albumText[bookIndex].name;
  const bookText = albumText[bookIndex].text;

  const chapterName = bookText[chapterIndex].name;
  const chapterText = bookText[chapterIndex].text;

  return [albumName, bookName, chapterName, chapterText];
};
