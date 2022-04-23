import { getCore } from "../core/getCore";

export const getSearchKeys = () => {
  const parameters = new URLSearchParams(window.location.search); // 000110

  if (parameters.has("k")) {
    const pars = parameters.get("k"); // 000110

    const keys = [
      Number.parseInt(pars.slice(0, 2)),
      Number.parseInt(pars.slice(2, 4)),
      Number.parseInt(pars.slice(4, 6)),
    ];

    if (keysAreValid(keys)) {
      return keys;
    }
  }
};

/* exported to index.js : window.onpopstate and MiddleColumn.jsx */

const keysAreValid = (keys) => {
  try {
    const [albumName, bookName, chapterName, chapterText] = getCore(...keys);
    if (albumName && bookName && chapterName && chapterText) return true;
  } catch {
    return false;
  }
};
