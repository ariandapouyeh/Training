function plus(x, y) {
	return x + y;
};
console.log(plus(5, 7));

plus["version"] = "v.1.0.0"; 
console.log(plus.version);

function minus(x, y) {
	return x - y;
}
console.log(minus(7, 8));
minus.importance = "high";
console.log(minus.importance);

function devide(x, y) {
	return x / y;
} 
devide.importance = "very important";
console.log(devide(1235, 5) + " is " + devide.importance);

// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
  return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);



function makepluser(pluser) {
	var myFunc = function(x) {
		return pluser + x;
	};
	return myFunc;
}
var makepluserThree = makepluser(3);
console.log(makepluserThree(5));

function dodevide(devider) {
	var devide = function(x) {
		return devider / x;
	};
	return devide;
}

var devideFourBy = dodevide(4);
console.log(devideFourBy(8));

function minusStrange (minuser) {
	function minusBy (x) {
		return minuser - x;
	}
	return minusBy;
};
var minusTheFive = minusStrange(5);
console.log(minusTheFive(8));

// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


function doMyOp (operation, x) {
	return operation(x);
};
var result = doMyOp(makepluserThree, 9);
console.log(result);
result = doMyOp(devideFourBy, 8);
console.log(result);

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, minusTheFive);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);