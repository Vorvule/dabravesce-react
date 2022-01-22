const getDayOfYearIndex = () => {
  // Everything is in milliseconds
  let oneDay = 1000 * 60 * 60 * 24;
  let currentDay = new Date();
  let startOfYear = new Date(currentDay.getFullYear(), 0, 0);
  let daysDifference = currentDay - startOfYear;

  // Zero based day of the year
  return Math.floor(daysDifference / oneDay) - 1;
};

export { getDayOfYearIndex };
