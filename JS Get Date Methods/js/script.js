// 1. The getTime() Method
 
// var d = new Date();
// document.getElementById("demo").innerHTML = d.getTime();

// 2. The getFullYear() Method

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getFullYear();

// 3. The getMonth() Method
// The getMonth() method returns the month of a date as a number from 0 to 11.
// To get the correct month, you must add 1:

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getMonth() + 1;

// You can use an array of names, and getMonth() to return the month as a name:

// var d = new Date ();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.getElementById("demo").innerHTML = months[d.getMonth()];

// 4. The getDate() Method
// The getDate() method returns the day of a date as a number (1-31):

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDate();

// 5. The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getHours();

//  6. The getMinutes() Method
//  The getMinutes() method returns the minutes of a date as a number (0-59):

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getMinutes();

// 7. The getSeconds() Method
// The getSeconds() method returns the seconds of a date as a number (0-59):

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getSeconds();

// 8. The getDay() Method

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDay();

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
