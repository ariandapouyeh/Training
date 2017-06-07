// (function (name) {
//	var greetingAri = "Hi ";
//	console.log(greetingAri + name);
//})("Arian");
//(function (comname) {
//	var greetingCo = "Hello ";
//	console.log(greetingCo + comname);
//})("Computer");

arian.greetingAri();
computer.greetingCo();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");