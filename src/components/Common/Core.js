import { allAlbums } from "../../albums/albums";

import { Mobile } from "./Mobile";
import { UrlPath } from "./UrlPath";

export class Core {
  static getContent(albumKey, bookKey, chapterKey) {
    const [albumName, bookName, chapterName, chapterText, chapterAudio] =
      this.getData(albumKey, bookKey, chapterKey);

    const paragraphs = this.getParagraphsJsx(chapterText);
    const source = chapterAudio ? "/audio/" + chapterAudio : null;

    this.setTitle(bookName, chapterName);
    this.setDescription(albumName, bookName, chapterName);

    console.log([albumName, bookName, chapterName, paragraphs, source]);
    return [albumName, bookName, chapterName, paragraphs, source];
  }

  static getData(albumKey, bookKey, chapterKey) {
    const albumName = allAlbums[albumKey].name;
    const albumText = allAlbums[albumKey].text;

    const bookName = albumText[bookKey].name;
    const bookText = albumText[bookKey].text;

    const chapterName = bookText[chapterKey].name;
    const chapterText = bookText[chapterKey].text;
    const chapterAudio = bookText[chapterKey].audio;

    return [albumName, bookName, chapterName, chapterText, chapterAudio];
  }

  static getParagraphsJsx(chapterText) {
    return chapterText.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  }

  static setContent(setKeys, keys = [0, 0, 0], pushKeys = true) {
    setKeys(keys);
    Mobile.showColumnById("MiddleColumn");

    const player = document.getElementById("AudioPlayer");
    player && player.load();

    window.scrollTo(0, 0);
    pushKeys && UrlPath.pushKeys(...keys);
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

  /* obsolete > */

  static show(albumKey = 0, bookKey = 0, chapterKey = 0, pushKeys = true) {
    this.outPut(...this.getData(albumKey, bookKey, chapterKey));
    this.showAudio(albumKey, bookKey, chapterKey);
    Mobile.showColumnById("MiddleColumn");
    window.scrollTo(0, 0);
    pushKeys && UrlPath.pushKeys(albumKey, bookKey, chapterKey);
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
}
