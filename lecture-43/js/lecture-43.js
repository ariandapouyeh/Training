// ***** String concatination
var string = "Hello";
var string = string + " World";
console.log(string + "!");


// ***** Equality 
var regtest = function (a, b) {
	if (a == y) {
		console.log(a + " is equal to " + b)
	}
	else {
		console.log(a + " and " + b + "are not equal.")
	}
}
var x = 4, y = 4;
regtest (x, y);
var x = "4";
regtest (x, y);
var abtest = function(a, b) {
	if (a === y) {
		console.log(a + " is equal to " + b)
	}
	else {
		console.log(a + " and " + b + " are not equal.")
	}
}
abtest(x , y);



// For loop
var sum = 0;
for (var i = 0; i < 10; i = i + 1) {
	sum = sum + i;
	console.log(i);
}
console.log("sum of 0 through 9 is: " + sum);