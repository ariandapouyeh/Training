document.addEventListener("DOMContentLoaded",
	function (event) {
    function answer (event) {
    	console.log(event);
	this.textContent = "submitted";
	var country = document.getElementById("country").value;
	var message = "<h2> You are from " + country + "! How nice! </h2>";
	var altMessage = country + " ! I also live in " + country + "!";

	// document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;
	if (country === ("denmark")) {
		document.getElementById("content").textContent = altMessage;
		document.getElementById("title").textContent;
		title = "I live in Denmark!"
		document.querySelector("h1").textContent = title;
	} 
	else {
		console.log(message);
	}
}
// document.querySelector("button").addEventListener("click", answer);
document.querySelector("#button").onclick = answer;
document.querySelector("body").addEventListener("mousemove", function (event) {
	if (event.altKey === true) {
	console.log("x: " + event.clientX)
	console.log("y: " + event.clientY)		
	}
});
	}
);

