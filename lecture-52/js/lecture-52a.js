(function (window) {
	var computer = {};
    computer.name = "Computer";
    var greeting = "Hi "
    computer.greetingCo = function () {
	console.log(greeting + computer.name);
}
    window.computer = computer;
})(window);
