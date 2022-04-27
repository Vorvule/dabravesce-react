export const showOneColumnWithId = (id) => {
  hideAllColumns();
  showColumnWithId(id);
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
