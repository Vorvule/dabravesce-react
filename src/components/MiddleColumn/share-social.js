import { allAlbums } from "../../albums/albums";
import { pairIndex } from "../Common/pair-index";

const shareSocial = (socialNetwork) => {
  let href;

  const albumIndex = localStorage.albumIndex;
  const bookIndex = localStorage.bookIndex;
  const chapterIndex = localStorage.chapterIndex;

  const keys =
    pairIndex(albumIndex) + pairIndex(bookIndex) + pairIndex(chapterIndex);
  // %23 = # url encoded
  const shareUrl = "https://www.dabravesce.by/index.html?k=" + keys;

  const bookName = allAlbums[albumIndex].text[bookIndex].name;
  const chapterName =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex].name;
  const shareInfo = `Прапануем Вашай увазе ${bookName}, ${chapterName}`;
  const hashTags =
    "%23Біблія+%23Евангелле+%23Библия+%23Евангелие+%23Bible+%23Gospel";
  // %0A = \n url encoded
  switch (socialNetwork) {
    case "twitter":
      href = `https://twitter.com/intent/tweet?text=${shareInfo}:&url=${shareUrl}%0A%0A`;
      href += `&hashtags=Біблія,Евангелле,Библия,Евангелие,Bible,Gospel`;
      break;
    case "facebook":
      href = `https://facebook.com/sharer.php?u=${shareUrl}&app_id=480142549312931`;
      href += `&quote=${shareInfo}%0A%0A${hashTags}`;
      break;
    case "telegram":
      href = `https://t.me/share/url?url=${shareUrl}%0A&text=${shareInfo}%0A%0A${hashTags}`;
      break;
    default:
      href = document.location.href;
  }

  document.location.href = href; // try .assign(href)
};

export { shareSocial };
