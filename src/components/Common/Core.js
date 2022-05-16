import { allAlbums } from "../../albums/albums";

export class Core {
  static getData(keys) {
    const [albumKey, bookKey, chapterKey] = keys;

    const albumName = allAlbums[albumKey].name;
    const albumText = allAlbums[albumKey].text;

    const bookName = albumText[bookKey].name;
    const bookText = albumText[bookKey].text;

    const chapterName = bookText[chapterKey].name;
    const chapterText = bookText[chapterKey].text;

    const chapterJsx = this.getJsx(chapterName.split("<br />"));
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

  static getContent(keys) {
    const [
      albumName,
      bookName,
      chapterName,
      chapterJsx,
      chapterText,
      chapterAudio,
    ] = this.getData(keys);

    const paragraphs = this.getJsx(chapterText);
    const source = chapterAudio && "/audio/" + chapterAudio;

    this.setTitle(bookName, chapterName);
    this.setDescription(albumName, bookName, chapterName);


    return [albumName, bookName, chapterJsx, paragraphs, source];
  }

  static getJsx(dataArray) {
    return dataArray.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
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
