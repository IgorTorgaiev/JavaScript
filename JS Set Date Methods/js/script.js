// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// 1. The setFullYear() Method

// var d = new Date ();
// d.setFullYear(2020);
// document.getElementById("demo").innerHTML = d;

// var d = new Date ();
// d.setFullYear(2020, 6, 16);
// document.getElementById("demo").innerHTML = d;

// 2. The setMonth() Method

// var d = new Date ();
// d.setMonth(6);
// document.getElementById("demo").innerHTML = d;

// 3. The setDate() Method
// The setDate() method sets the day of a date object:

// var d = new Date();
// d.setDate(16);
// document.getElementById("demo").innerHTML = d;

// 4. The setDate() method
// The setDate() method can be used to add days to a date.

// var d = new Date();
// d.setDate(d.getDate() + 40);
// document.getElementById("demo").innerHTML = d;

// 5. The setHours() Method

// var d = new Date();
// d.setHours(12);
// document.getElementById("demo").innerHTML = d;

// 6. The setMinutes() Method

// var d = new Date();
// d.setMinutes(39);
// document.getElementById("demo").innerHTML = d;

// 7. The setSeconds() Method

// var d = new Date();
// d.setSeconds(50);
// document.getElementById("demo").innerHTML = d;

// 8. Compare Dates

var today, later, text;
today = new Date();
later = new Date();
later.setFullYear(2021, 2, 8);

if (later > today) {
    text = "Today is before March 8, 2021";
} else {
    text = "Today is after March 8, 2021";
}
document.getElementById("demo").innerHTML = text;