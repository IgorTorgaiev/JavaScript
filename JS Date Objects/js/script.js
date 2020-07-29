// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// 1. new Date ()
// var d = new Date();
// document.getElementById("demo").innerHTML = d;

// 2. new Date(year, month, ...)

// var d = new Date(2020, 06, 15, 14, 45, 30, 0);
// document.getElementById("demo").innerHTML = d;

// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.

// 3. Previous Century

// var d = new Date(1999, 11, 24, 0, 0, 0);
// document.getElementById("demo").innerHTML = d;

// 4. new Date(dateString)

// var d = new Date ("June 15, 2020, 14:53:14");
// document.getElementById("demo").innerHTML = d;

// 5. JavaScript Stores Dates as Milliseconds

// var d = new Date(0);
// document.getElementById("demo").innerHTML = d;

// var d = new Date(1000000000);
// document.getElementById("demo").innerHTML = d;

// var d = new Date(-1000000000);
// document.getElementById("demo").innerHTML = d;

// 6. Displaying Dates

// var d = new Date();
// document.getElementById("demo").innerHTML = d;

// Same as:

// var d = new Date();
// document.getElementById("demo").innerHTML = d.toString();

// 7. The toUTCString() method

// var d = new Date();
// document.getElementById("demo").innerHTML = d.toUTCString();

// 8. The toDateString() method 

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();