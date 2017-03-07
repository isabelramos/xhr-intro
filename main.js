function executeThisCodeAfterFileLoad () {
	console.log("woo!");
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoad);
myRequest.addEventListener("error", executeThisCodeAfterFileFail);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log(myRequest);