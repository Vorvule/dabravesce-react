const updateLocalStorage = (albumIndex, bookIndex, chapterIndex) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("albumIndex", albumIndex);
    localStorage.setItem("bookIndex", bookIndex);
    localStorage.setItem("chapterIndex", chapterIndex);
  }
};

export { updateLocalStorage };
