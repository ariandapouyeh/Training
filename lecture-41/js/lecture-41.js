var a = "global";
var b = "always global";
var funA = function () {
	var a = "not global, funA local!";
	console.log (a);
	console.log(b);
} 
funA ();
var funB = function(a, b) {
	console.log(a + b);
}
funB (a, b);
