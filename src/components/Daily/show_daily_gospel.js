import { getDailyKeys } from "./get_daily_keys";
import { getCore } from "../MiddleColumn/get_core";

const showDailyGospel = () => {
  // [albumName, bookName, chapterName, chapterText]
  const [, bookName, chapterName] = getCore(...getDailyKeys());
  const dailyGospel = `${bookName}, ${chapterName}`;
  document.getElementById("RightColumn_DailyGospel").innerHTML = dailyGospel;
};

export { showDailyGospel };
