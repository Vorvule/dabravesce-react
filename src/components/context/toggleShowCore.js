export const toggleShowCore = () => {
  document.getElementById("LeftColumn").classList.toggle("w3-hide-small");
  document.getElementById("LeftColumn").classList.toggle("w3-hide-medium");
  
  document.getElementById("MiddleColumn").classList.toggle("w3-hide");
};