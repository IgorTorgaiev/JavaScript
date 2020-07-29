// 1. JavaScript Loops

// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;

// for (i=0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// 2. The For Loop

// var text = "";
// var i;
// for (i=0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i, len, text;
// for (i=0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 2;
// var len = cars.length;
// var text = "";

// for (; i<len; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// var cars = ["BMW", "Volvo", "Saab", "Ford"];

// var i=0;
// var len = cars.length;
// var text = "";

// for (; i < len;) {
//     text += cars[i] + "<br>";
//     i++;
// }
// document.getElementById("demo").innerHTML = text;

// 3. The For/In Loop

// var txt = "";
// var person = {fname:"John", lname:"Doe", age:25};
// var x;
// for (x in person) {
//     txt += person[x] + " ";
// }
// document.getElementById("demo").innerHTML = txt;

// 4. The For/Of Loop

// 4.1. Looping over an Array

// var cars = ['BMW', 'Volvo', 'Mini'];
// var x;

// for (x of cars) {
//     document.write(x +"<br> ");
// }

//  4.2. Looping over a String

var txt = 'JavaScript';
var x;

for (x of txt) {
    document.write (x + "<br> ");
}