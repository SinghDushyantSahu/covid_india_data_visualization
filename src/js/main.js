var data = null;
const states = document.getElementsByClassName("state");
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
    );
    data = await response.json();
    mapStateLink(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const loadMap = () => {
  const mapStructure = document.querySelector("#mapStructure");
  mapStructure.innerHTML = (() => {
    var innerElement = "";
    States.map(({ state, svg }, index) => {
      innerElement += `<a xlink:title="${state}" class="state" id="${index}"> 
      <path d="${svg}"></path>
      </a>`;
    });
    return innerElement;
  })();
};

fetchData();
loadMap();

setInterval(() => {
  fetchData();
  loadMap();
}, 100000);

const mapStateLink = (data) => {
  for (var i = 0; i < states.length; i++)
    states[i].onclick = function () {
      printInfo(data.regionData[this.id]);
    };
};

const printInfo = (regionData) => {
  console.log(regionData);
  document.getElementById("resultHeading").innerHTML = regionData.region;
  document.getElementById("totalCases").innerHTML = regionData.totalInfected + " Cases";
  chartData = [regionData.activeCases, regionData.newInfected, regionData.recovered, regionData.deceased];
  constructPieChart(chartData);
};
