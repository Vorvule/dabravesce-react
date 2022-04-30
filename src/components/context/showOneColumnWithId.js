const sideColumns = ["LeftColumn", "RightColumn"];

export const showOneColumnWithId = (id) => {
  if (screenIsLarge()) return;
  if (toggleShowSideColumn(id)) return;
  hideAllColumns();
  showColumnWithId(id);
};

const screenIsLarge = () => {
  return window.innerWidth > 992;
};

const toggleShowSideColumn = (id) => {
  if (sideColumnVisible(id)) {
    showOneColumnWithId("MiddleColumn");
    return true;
  }
};

const sideColumnVisible = (id) => {
  const isSideColumn = sideColumns.includes(id);

  const isVisibleColumns = !document
    .getElementById(id)
    .classList.contains("w3-hide-small");

  return isSideColumn && isVisibleColumns;
};

const hideAllColumns = () => {
  document.getElementById("MiddleColumn").classList.add("w3-hide");
  sideColumns.forEach((id) => {
    document.getElementById(id).classList.add("w3-hide-small");
    document.getElementById(id).classList.add("w3-hide-medium");
  });
};

const showColumnWithId = (id) => {
  if (id === "MiddleColumn") {
    document.getElementById(id).classList.remove("w3-hide");
  } else {
    document.getElementById(id).classList.remove("w3-hide-small");
    document.getElementById(id).classList.remove("w3-hide-medium");
  }
};
