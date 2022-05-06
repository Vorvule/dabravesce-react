import { allAlbums } from "../../albums/albums";
import { Mobile } from "./Mobile";

import { UrlPath } from "./UrlPath";

export class Core {
  static show(albumKey = 0, bookKey = 0, chapterKey = 0, pushKeys = true) {
    try {
      this.outPut(...this.get(albumKey, bookKey, chapterKey));
      this.showAudio(albumKey, bookKey, chapterKey);
      Mobile.showOneColumnWithId("MiddleColumn");
      window.scrollTo(0, 0);
      pushKeys && UrlPath.pushKeys(albumKey, bookKey, chapterKey);
      this.updateLocalStorage(albumKey, bookKey, chapterKey);
      return true;
    } catch (e) {
      console.log(e.message);
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
    const text = this.getParagraphs(chapterText);

    document.getElementById("MiddleColumn_AlbumName").innerHTML = albumName;
    document.getElementById("MiddleColumn_BookName").innerHTML = bookName;
    document.getElementById("MiddleColumn_ChapterName").innerHTML = chapterName;
    document.getElementById("MiddleColumn_ChapterParagraphs").innerHTML = text;

    this.setTitle(bookName, chapterName);
    this.setDescription(albumName, bookName, chapterName);
  }

  static setTitle(bookName, chapterName) {
    const chapter = chapterName.split("<br />")[0];
    const title = "Дабравесце — " + bookName + ", " + chapter;
    document.title = title;
  }

  static setDescription(albumName, bookName, chapterName) {
    const description = albumName + ", " + bookName + ", " + chapterName;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }

  static getParagraphs(chapterText) {
    const reducer = (paragraphs, paragraph) =>
      paragraphs + `<p>${paragraph}</p>`;

    return chapterText.reduce(reducer, "");
  }

  static showAudio(albumKey, bookKey, chapterKey) {
    const AudioElement = document.getElementById("AudioPlayer");
    const SourceElement = document.getElementById("AudioSource");

    const audioSource =
      allAlbums[albumKey].text[bookKey].text[chapterKey].audio;

    SourceElement.src = audioSource && "/audio/" + audioSource;

    audioSource
      ? AudioElement.classList.remove("w3-hide")
      : AudioElement.classList.add("w3-hide");

    AudioElement.load();
  }

  static updateLocalStorage(albumIndex, bookIndex, chapterIndex) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("albumIndex", albumIndex);
      localStorage.setItem("bookIndex", bookIndex);
      localStorage.setItem("chapterIndex", chapterIndex);
    }
  }
}
