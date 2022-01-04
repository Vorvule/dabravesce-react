import React from "react";
import allAlbums from "../../tomes/all_albums";

const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) =>
  chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent[0];
    return (
      <li
        key={chapterIndex}
        onClick={() => show(albumIndex, bookIndex, chapterIndex)}
      >
        {chapterName}
      </li>
    );
  });

const show = (albumIndex, bookIndex, chapterIndex) => {
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

export default MenuChapterList;
