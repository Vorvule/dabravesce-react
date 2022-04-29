export const showOneColumnWithId = (id) => {
  if (screenIsLarge()) return;
  hideAllColumns();
  showColumnWithId(id);
};

const screenIsLarge = () => {
  return window.innerWidth > 992
}

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
