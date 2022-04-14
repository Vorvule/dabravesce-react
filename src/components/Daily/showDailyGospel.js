import { getDailyKeys } from "./getDailyKeys";
import { getCore } from "../MiddleColumn/getCore";

const showDailyGospel = () => {
  // [albumName, bookName, chapterName, chapterText]
  const [, bookName, chapterName] = getCore(...getDailyKeys());
  const dailyGospel = `${bookName}, ${chapterName}`;
  document.getElementById("RightColumn_DailyGospel").innerHTML = dailyGospel;
};

export { showDailyGospel };
