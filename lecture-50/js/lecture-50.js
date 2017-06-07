var klassensElever = new Array ();
klassensElever[0] = "Arian";
klassensElever[1] = "Albert";
klassensElever[2] = "Helbo";
console.log(klassensElever);
console.log("The first student is " + klassensElever[0]);
klassensElever[3] = function giveName (name) {
	console.log("The name is " + name + ".");
}
klassensElever[3](klassensElever[0]);
klassensElever[4] = {git: "Gitte", lou: "Louise", ser: "Serkan"};
console.log("Vores lærere er " + klassensElever[4].git + ", " + klassensElever[4].lou + ", og " + klassensElever[4].ser + ".");

// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

var iranere = ["os", "Nasim", "Hamid", function(Name){return Name;}, {squad: "ali, siamak"}, {dahePanja: "Mehran, nemat, parvin"}];
console.log(iranere[3](iranere[1]));

for (i=0; i < iranere.length; i++) {
	console.log(iranere[i]);
}

var giveObj = {
	name: "Dark Invader",
	age: 15,
	intrests: "Programming"
}
for (var prop in giveObj) {
	console.log(giveObj[prop]);
}

// Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";
names2.color = "blue";
for (var name in names2) {
  console.log("Hello " + names2[name]);
}