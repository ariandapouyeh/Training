function test () {
	console.log(this);
	this.myName = "Arian";
};
test();
console.log(this.myName);



function square (sidelength) {
	this.sidelength = sidelength;
}
square.prototype.findArea = function() {
	return Math.pow(this.sidelength, 2);
};
var mySquare = new square(3);
console.log(mySquare.findArea());




function triangle (sidelength1, sidelength2, sidelength3) {
	this.sidelength1 = sidelength1;
	this.sidelength2 = sidelength2;
	this.sidelength3 = sidelength3;
}
var mytriangle = new triangle(3, 6, 9);
console.log(mytriangle.sidelength3);

function circle (radius) {
	this.radius = radius;
	this.findArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	}
}
var myCircel = new circle(30);
console.log(myCircel.findArea());




oldPass.prototype.getAge = function() {
	return (2017 - this.passYear) + this.age;
};
function oldPass (passYear, age) {
	this.passYear = passYear;
	this.age = age;

}
var fatherPass = new oldPass(1969, 37);
console.log(fatherPass.getAge());