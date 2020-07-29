// JavaScript Number Methods
// 1. The toString() Method

// var a = 123;
// document.getElementById("demo").innerHTML = 
// (123).toString() + "<br>" + (100 + 22 + 1).toString() + "<br>" +
// a.toString();

// 2. The toFixed() Method

// var x = 9.785;
// document.getElementById("demo").innerHTML = 
// x.toFixed() + "<br>" + x.toFixed(2) + "<br>" + x.toFixed(4)
// + "<br>" + x.toFixed(5) + "<br>" + x.toFixed(10); 

// 3. The toPrecision() Method

// var x = 9.785;
// document.getElementById("demo").innerHTML = 
// x.toPrecision() + "<br>" + x.toPrecision(2) + "<br>" + x.toPrecision(4)
// + "<br>" + x.toPrecision(5) + "<br>" + x.toPrecision(10); 

// 4. The valueOf() Method

// var x = 321;

// document.getElementById("demo").innerHTML = x.valueOf() + "<br>" +
// (320 + 1).valueOf() + "<br>" + (321).valueOf();

// 5. The parseInt() Method

// document.getElementById("demo").innerHTML =
// parseInt("10") + "<br>" + parseInt("10.1") + "<br>" + parseInt("10.39") + "<br>" +
// parseInt("10 days") + "<br>" + parseInt(" days 10");

// 6. The parseFloat() Method

// document.getElementById("demo").innerHTML = 
// parseFloat("12") + "<br>" + parseFloat("12 10 9") + "<br>" +
// parseFloat("12 days") + "<br>" + parseFloat("days 12") + "<br>" +
// parseFloat("12.356") + "<br>";

// 7. Number Properties
// var a = Number.MAX_VALUE;
// document.getElementById("demo").innerHTML = a;

// var a = Number.MIN_VALUE;
// document.getElementById("demo").innerHTML = a;

// var a = Number.POSITIVE_INFINITY;
// document.getElementById("demo").innerHTML = a;

// var x = 1/0;
// document.getElementById("demo").innerHTML = x;

// var x = Number.NEGATIVE_INFINITY;
// document.getElementById("demo").innerHTML = x;

// var x = - 1/0;
// document.getElementById("demo").innerHTML = x;

document.getElementById("demo").innerHTML = Number.NaN;