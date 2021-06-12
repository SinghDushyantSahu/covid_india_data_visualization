
var promiseAPI = new Promise((resolve, reject) => {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');

	xhr.onload = function () {
		if (this.readyState == 4) {
			resolve(JSON.parse(this.responseText));
		}
		else {
			reject('Error!!')
		}
	}

	xhr.send();
});

promiseAPI.then((data) => {
	console.log(data);
	stateInfo(data);
}).catch((error) => {
	console.log(error);
});


function printInfo(regionData) {
	console.log(regionData);
	document.getElementById('result').innerHTML = '<h1> ActiveCases:' + regionData.activeCases +
		'</h1> <h1> Deceased:' + regionData.deceased +
		'</h1> <h1> NewDeceased:' + regionData.newDeceased +
		'</h1> <h1> NewInfected:' + regionData.newInfected +
		'</h1> <h1> NewRecovered:' + regionData.newRecovered +
		'</h1> <h1> Recovered:' + regionData.recovered +
		'</h1> <h1> Region:' + regionData.region +
		'</h1> <h1> TotalInfected:' + regionData.totalInfected + '</h1>'
}


function stateInfo(data) {
	var states = document.getElementsByClassName("state");
	for (var i = 0; i < states.length; i++) {
		states[i].onclick = function () {
			console.log(this.id);
			var regData = data.regionData[this.id];
			printInfo(regData);
		};
	}
}
/*
function searchInput(){
}

*/




