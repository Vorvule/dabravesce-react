export const showOneColumnWithId = (id) => {
  if (screenIsLarge()) return;

  if (sideColumnVisible(id)) {
    showOneColumnWithId("MiddleColumn");
    return;
  }

  hideAllColumns();
  showColumnWithId(id);
};

const screenIsLarge = () => {
  return window.innerWidth > 992;
};

const sideColumnVisible = (id) => {
  const isSideColumn = id === "LeftColumn" || id === "RightColumn";
  
  const columnIsVisible = !document
    .getElementById(id)
    .classList.contains("w3-hide-small");

  return isSideColumn && columnIsVisible;
};

const hideAllColumns = () => {
  document.getElementById("LeftColumn").classList.add("w3-hide-small");
  document.getElementById("LeftColumn").classList.add("w3-hide-medium");

  document.getElementById("MiddleColumn").classList.add("w3-hide");

  document.getElementById("RightColumn").classList.add("w3-hide-small");
  document.getElementById("RightColumn").classList.add("w3-hide-medium");
};

const showColumnWithId = (id) => {
  if (id === "MiddleColumn") {
    document.getElementById(id).classList.remove("w3-hide");
  } else {
    document.getElementById(id).classList.remove("w3-hide-small");
    document.getElementById(id).classList.remove("w3-hide-medium");
  }
};
