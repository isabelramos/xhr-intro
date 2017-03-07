var dinoContainer = document.getElementById("dino-container");



function makeDom (xhrData) {
	var dinosaurString = "";
	var currentDinosaur;
	for (var i=0; i<xhrData.dinosaurs.length; i++) {
		currentDinosaur = xhrData.dinosaurs[i];

		dinosaurString += `<div class="col-sm-6 col-md-4">`;
		dinosaurString += `<div class="thumbnail">`;
		dinosaurString += `<img src="${currentDinosaur.url}" alt="dinosaur">`;
		dinosaurString += `<div class="caption">`;
		dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
		dinosaurString += `<p>${currentDinosaur.type}</p>`;
		dinosaurString += `<p> Likes to eat: ${currentDinosaur.food}</p>`;		
		dinosaurString += `</div></div></div>`;
	}

	dinoContainer.innerHTML = dinosaurString;
}


function executeThisCodeAfterFileLoad () {
	var data = JSON.parse(this.responseText);
	console.log("woo!", data);
	makeDom(data);
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoad);
myRequest.addEventListener("error", executeThisCodeAfterFileFail);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();