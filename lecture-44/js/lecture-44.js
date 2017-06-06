var toOrder = function(order) {
	order = order || "unaccepted";
	console.log(order);
}
toOrder("kebab");
toOrder();
var toGuess = function(guess) {
	if (guess === undefined) {
		console.log("unaccepted");
	}
	else { console.log("that's a good guess!"); }
};
toGuess();
toGuess("kebab?");