console.log(document.getElementById('title'));
console.log(window);
console.log(document instanceof HTMLDocument);
function answer () {
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