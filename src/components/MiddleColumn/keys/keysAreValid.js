import { getCore } from "../getCore";

const keysAreValid = (keys) => {
  try {
    const [albumName, bookName, chapterName, chapterText] = getCore(...keys);
    if (albumName && bookName && chapterName && chapterText) return true;
  } catch {
    return false;
  }
};

export { keysAreValid };
