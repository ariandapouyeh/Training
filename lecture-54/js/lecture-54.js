document.addEventListener("DOMContentLoaded",
	function (event) {

    function answer (event) {
	this.textContent = "submitted";
	


	var country = document.getElementById("country").value;
	var message = "<h2> You are from " + country + "! How nice! </h2>";
	var altMessage = country + " ! I also live in " + country + "!";

	// document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;
	if (country === "denmark" && "europe" && "world" && "scandinavia") {
		document.getElementById("content").textContent = altMessage;
		document.getElementById("title").textContent;
		title = "I live in Denmark!"
		document.querySelector("h1").textContent = title;
	};	 
}
// document.querySelector("button").addEventListener("click", answer);
document.querySelector("#button").onclick = answer;
	}
);

