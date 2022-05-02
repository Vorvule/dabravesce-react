import { getDailyKeys } from "./getDailyKeys";
import { Core } from "../../MiddleColumn/Core";

export const showDailyGospel = () => {
  // [albumName, bookName, chapterName, chapterText]
  const [, bookName, chapterName] = Core.get(...getDailyKeys());
  const dailyGospel = `${bookName}, ${chapterName}`;
  
  document.getElementById("RightColumn_DailyGospel").innerHTML = dailyGospel;
};
