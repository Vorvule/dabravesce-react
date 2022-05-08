import { allAlbums } from "../../albums/albums";

import { Mobile } from "./Mobile";
import { UrlPath } from "./UrlPath";

export class Core {
  static getData(albumKey, bookKey, chapterKey) {
    const albumName = allAlbums[albumKey].name;
    const albumText = allAlbums[albumKey].text;

    const bookName = albumText[bookKey].name;
    const bookText = albumText[bookKey].text;

    const chapterName = bookText[chapterKey].name;
    const chapterJsx = this.getJsx(chapterName.split("<br />"));
    const chapterText = bookText[chapterKey].text;
    const chapterAudio = bookText[chapterKey].audio;

    return [
      albumName,
      bookName,
      chapterName,
      chapterJsx,
      chapterText,
      chapterAudio,
    ];
  }

  static getContent(albumKey, bookKey, chapterKey) {
    const [
      albumName,
      bookName,
      chapterName,
      chapterJsx,
      chapterText,
      chapterAudio,
    ] = this.getData(albumKey, bookKey, chapterKey);

    const paragraphs = this.getJsx(chapterText);
    const source = chapterAudio ? "/audio/" + chapterAudio : null;

    this.setTitle(bookName, chapterName);
    this.setDescription(albumName, bookName, chapterName);

    return [albumName, bookName, chapterJsx, paragraphs, source];
  }

  static getJsx(dataArray) {
    return dataArray.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
  }

  static setContent(keys = [0, 0, 0], pushKeys = true) {
    window.setKeys(keys);
    window.scrollTo(0, 0);

    const player = document.getElementById("AudioPlayer");
    player && player.load();

    Mobile.showColumnById("MiddleColumn");
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
}
