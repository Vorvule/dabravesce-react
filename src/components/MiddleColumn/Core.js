import { showAudio } from "./audio/showAudio";
import { showOneColumnWithId } from "../context/showOneColumnWithId";
import { UrlPath } from "./UrlPath";
import { allAlbums } from "../../albums/albums";

export class Core {
  static show(albumKey = 0, bookKey = 0, chapterKey = 0, pushKeys = true) {
    this.outPut(...this.get(albumKey, bookKey, chapterKey));
    showAudio(albumKey, bookKey, chapterKey);
    showOneColumnWithId("MiddleColumn");
    window.scrollTo(0, 0);
    pushKeys && UrlPath.pushKeys(albumKey, bookKey, chapterKey);
    this.updateLocalStorage(albumKey, bookKey, chapterKey);
  }

  static updateLocalStorage(albumIndex, bookIndex, chapterIndex) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("albumIndex", albumIndex);
      localStorage.setItem("bookIndex", bookIndex);
      localStorage.setItem("chapterIndex", chapterIndex);
    }
  }

  static get(albumIndex, bookIndex, chapterIndex) {
    const albumName = allAlbums[albumIndex].name;
    const albumText = allAlbums[albumIndex].text;

    const bookName = albumText[bookIndex].name;
    const bookText = albumText[bookIndex].text;

    const chapterName = bookText[chapterIndex].name;
    const chapterText = bookText[chapterIndex].text;

    return [albumName, bookName, chapterName, chapterText];
  }

  static outPut(albumName, bookName, chapterName, chapterText) {
    const text = this.getChapterText(chapterText);

    document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
    document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
    document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
    document.getElementById("MiddleColumn_ChapterParagraphs").innerHTML = text;

    this.setTitle(bookName, chapterName);
    this.setDescription(albumName, bookName, chapterName);
  }

  static setDescription(albumName, bookName, chapterName) {
    const description = albumName + ", " + bookName + ", " + chapterName;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }

  static setTitle(bookName, chapterName) {
    const chapter = chapterName.split("<br />")[0];
    const title = "Дабравесце — " + bookName + ", " + chapter;
    document.title = title;
  }

  static getChapterText(chapterText) {
    const reducer = (paragraphs, paragraph) =>
      paragraphs + `<p>${paragraph}</p>`;

    return chapterText.reduce(reducer, "");
  }
}
