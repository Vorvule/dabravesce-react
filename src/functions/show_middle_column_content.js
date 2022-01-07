import allAlbums from "../albums/all_albums";

const showMiddleColumnContent = (albumIndex, bookIndex, chapterIndex) => {
  const albumName = allAlbums[albumIndex].name;
  const albumContent = allAlbums[albumIndex].text;

  const bookName = albumContent[bookIndex].name;
  const bookContent = albumContent[bookIndex].text;

  const chapterName = bookContent[chapterIndex][0];
  const chapterContent = bookContent[chapterIndex][1];

  let chapterText = "";
  chapterContent.forEach((chapter) => {
    chapterText += `<p>${chapter}</p>`;
  });

  document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
  document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
  document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
  document.getElementById("MiddleColumn_ChapterText").innerHTML = chapterText;
};

export { showMiddleColumnContent };
