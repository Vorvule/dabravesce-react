const toggleShowCore = () => {
  const middleColumnIsHidden = document
    .getElementById("MiddleColumn")
    .classList.contains("w3-hide");

  if (middleColumnIsHidden) {
  }
  document.getElementById("LeftColumn").classList.toggle("w3-hide-small");
  document.getElementById("LeftColumn").classList.toggle("w3-hide-medium");
  document.getElementById("MiddleColumn").classList.toggle("w3-hide");
};

export { toggleShowCore };
