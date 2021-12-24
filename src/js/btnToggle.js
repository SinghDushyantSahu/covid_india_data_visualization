const btnMap = document.querySelector(".btnMap");
const btnName = document.querySelector(".btnName");

const colorSkyBlue = "#41dad6";
const colorYellow = "#f3ed3d";
const colorPink = "#fc6b6b";

const searchContainer = document.querySelector(".searchContainer");
const map = document.querySelector(".map");
const panel = document.querySelector(".panel");

searchContainer.style.display = "none";
window.onload = () => {
  btnMap.style.backgroundColor = colorSkyBlue;
}

btnMap.onclick = () => {
  map.style.display = "block";
  searchContainer.style.display = "none";
  panel.style.flexDirection = "column";
  btnMap.style.backgroundColor = colorSkyBlue;
  btnName.style.backgroundColor = "white";
};

btnName.onclick = () => {
  map.style.display = "none";
  searchContainer.style.display = "block";
  panel.style.flexDirection = "row";
  btnName.style.backgroundColor = colorSkyBlue;
  btnMap.style.backgroundColor = "white";
};
