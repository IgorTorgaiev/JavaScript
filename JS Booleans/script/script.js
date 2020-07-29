// 1. The Boolean() Function

// function myFunction () {
//     document.getElementById("demo").innerHTML = Boolean(10>9);
// }

//  The option below also works and gives the same result

// function myFunction () {
//     document.getElementById("demo").innerHTML = 10 > 9;
// }

// 2. Comparisons and Conditions

// var b1 = Boolean(100);
// var b2 = Boolean(3.14);
// var b3 = Boolean(-15);
// var b4 = Boolean("Hello");
// var b5 = Boolean('false');
// var b6 = Boolean (1 + 7 + 3.14);

// document.getElementById("demo").innerHTML = 
// "100 is " + b1 + "<br>" + "3.14 is " + b2 + "<br>" + "-15 is " + b3 
// + "<br>" + "Any (empty) string is " + b4 + "<br>" + "Even the string 'false' is " + b5
// + "<br>" + "ANy expression (except zero) is " + b6; 

// 3. Everything Without a "Value" is False

// function myFunction () {
//     var x = 0;
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction () {
//     var x = -0;
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction () {
//     var x = "";
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction () {
//     var x;
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction () {
//     var x = null;
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction () {
//     var x = false;
//     document.getElementById("demo").innerHTML = Boolean(x);
// }

// 4. Booleans Can be Objects

// var x = false; // X is a Boolean
// var y = new Boolean(false); // y is an object
// document.getElementById("demo").innerHTML = 
// typeof x + "<br>" + typeof y;

// var x = false;
// var y = new Boolean(false);
// document.getElementById("demo").innerHTML = (x==y);

// var x = false;
// var y = new Boolean(false);
// document.getElementById("demo").innerHTML = (x===y);

// Never create booleans as objects.
// Booleans and objects cannot be safely compared.

var x = new Boolean(false);
var y = new Boolean(false);
document.getElementById("demo").innerHTML = (x==y);