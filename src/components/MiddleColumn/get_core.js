import allAlbums from "../../albums/albums";

const getCore = (albumIndex, bookIndex, chapterIndex) => {
  const albumName = allAlbums[albumIndex].name;
  const albumText = allAlbums[albumIndex].text;

  const bookName = albumText[bookIndex].name;
  const bookText = albumText[bookIndex].text;

  const chapterName = bookText[chapterIndex][0];
  const chapterText = bookText[chapterIndex][1];

  return [albumName, bookName, chapterName, chapterText];
};

export { getCore };
