import { getDayOfYearIndex } from "./get_day_of_year_index";

const getDailyKeys = () => {
  const zeroBasedDayOfYearIndex = getDayOfYearIndex();

  // return [bookIndex, chapterIndex];
  if (zeroBasedDayOfYearIndex < 358) {
    const modulus = zeroBasedDayOfYearIndex % 89;
    switch (true) {
      case modulus < 28:
        return [0, modulus];
      case modulus > 27 && modulus < 44:
        return [1, modulus - 28];
      case modulus > 43 && modulus < 68:
        return [2, modulus - 44];
      case modulus > 67:
        return [3, modulus - 68];
      default:
        return [0, 0];
    }
  } else {
    return [2, 0];
  }

  // indexes 0...355 = 356 Days = 89 Gospel chapters x 4 Times
  // indexes 356, 357 = Mathew 1, 2 = fit for Christmas reading
  // index 358...366 / 367 = Luke, 1
  // indexes 358 / 359 = Christmas Eve
  // indexes 359 / 360 = Christmas
};

export { getDailyKeys };
