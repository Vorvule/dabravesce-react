const reduceParagraphs = (chapterText) => {
  const reducer = (paragraphs, paragraph) => paragraphs + `<p>${paragraph}</p>`;

  return chapterText.reduce(reducer, "");
};

export { reduceParagraphs };
