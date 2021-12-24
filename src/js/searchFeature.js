const container = document.querySelector(".searchContainer");
const searchBar = container.querySelector("input");
const searchList = document.querySelector("#searchList");

searchBar.onkeyup = (e) => {
  var keyword = e.target.value;
  if (e.keyCode === 13) {
    searchData(keyword);
  } else if (keyword) {
    searchList.style.display = "block";

    const currentSearchList = States.filter(({ state }) => {
      if (state.toLocaleLowerCase() === keyword.toLocaleLowerCase()) {
        return false;
      }
      return state.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase());
    });

    searchList.innerHTML = (() => {
      var innerElement = "";
      currentSearchList.map(({ state, svg }, index) => {
        innerElement += `<li>${state}</li>`;
      });
      return innerElement;
    })();

    const allLis = searchList.querySelectorAll("li");
    for (var i = 0; i < allLis.length; i++)
      allLis[i].setAttribute("onclick", "select(this)");
  } else {
    searchList.style.display = "none";
  }
};

const select = (e) => {
  searchBar.value = e.textContent;
  searchList.style.display = "none";
  searchData(e.textContent);
};

const searchData = (keyword) => {
  var i = 0;
  const state = document.getElementsByClassName("state");
  while (i < States.length) {
    if (States[i].state.toLocaleLowerCase() === keyword.toLocaleLowerCase()) {
      break;
    }
    i++;
  }
  if (i >= 0 && i < States.length) {
    if (data !== null) {
      printInfo(data.regionData[i]);
    } else {
      console.log("API data is null!");
      fetchData();
    }
  } else {
    alert(`'${keyword}' is not a State!`);
  }
};
