const createChapterCore = (chapterText) => {
  const reducer = (core, paragraph) => core + `<p>${paragraph}</p>`;

  return chapterText.reduce(reducer, "");
};

export { createChapterCore };
