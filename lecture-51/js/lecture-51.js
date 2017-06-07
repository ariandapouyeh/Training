function addTo (plus) {
	function declareplus () {
		console.log(plus + " is added to your Number!");
	};
	declareplus(plus);
	return function (number) {
		return number + plus;
	};
}
var addToTwo = addTo(2);
console.log(addToTwo(5));