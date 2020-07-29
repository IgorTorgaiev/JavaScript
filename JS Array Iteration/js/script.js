// 1. Array.forEach()

// var txt = "";
// var numbers = [45, 4, 9, 16, 25];

// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//     txt = txt + value + "<br>";
// }

// The example can be rewritten to:

// function myFunction(value) {
//     txt = txt + value + "<br>";
// }

// 2. Array.map()

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = numbers2;
// function myFunction (value, index, array) {
//     return value * 2;
// }

// When a callback function uses only the value parameter, the index and array parameters can be omitted:

// document.getElementById("demo").innerHTML = numbers2;
// function myFunction (value) {
//     return value * 2;
// }

// 3. Array.filter()

// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// document.getElementById("demo").innerHTML = over18;

// function myFunction (value, index, array) {
//     return value > 18;
// }

// In the example above, the callback function does not use the index and array parameters, so they can be omitted:

// function myFunction (value) {
//     return value > 18;
// }

// 4. Array.reduce()

// var numbers = [25, 6, 19, 45, 4];
// var result = numbers.reduce(myFunction);
// document.getElementById("demo").innerHTML = "The whole sum is " + result;

// function myFunction (total, value, array, index) {
//     return total + value;
// }

// The example above does not use the index and array parameters. It can be rewritten to:

// function myFunction (total, value) {
//     return total + value;
// }

//  5. Array.reduceRight()

// var numbers = [25, 6, 19, 45, 4];
// var sum = numbers.reduceRight(myFunction);
// document.getElementById("demo").innerHTML = sum;

// function myFunction (total, value, index, array) {
//     return total + value;
// }

// The example above does not use the index and array parameters. It can be rewritten to:

// function myFunction (total, value) {
//     return total + value;
// }

// 6. Array.every()

// var numbers = [25, 6, 19, 45, 4];
// var allOver18 = numbers.every(myFunction);
// document.getElementById("demo").innerHTML = "All over 18 is absolutely " + allOver18;

// function myFunction (index, array, total, value) {
//     return value > 18;
// }

// When a callback function uses the first parameter only (value), the other parameters can be omitted:

// function myFunction (value) {
//     return value > 18;
// }

//  7. Array.some()

// var numbers = [25, 6, 16, 45, 4];
// var someOver18 = numbers.some(myFunction);
// document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

// function myFunction(index, value, total, array) {
//     return value < 18; 
// }

// 8. Array.indexOf()

// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var indexOf = fruits.indexOf("Apple");
// document.getElementById("demo").innerHTML = "Apple is found in position " + indexOf;

// 9. lastIndexOf()

// var fruits = ["Apple", "Orange", "Apple", "Mango"];
// var b = fruits.lastIndexOf("Apple");
// document.getElementById("demo").innerHTML = "The Apple is found in position " + (b+4);

//  10. Array.find()

// var numbers = [4, 9, 16, 25, 29];
// var a = numbers.find(myFunction);
// document.getElementById("demo").innerHTML = "First number over 18 is " + a;

// function myFunction (value, index, array) {
//     return value > 18;
// }

// 11. Array.findIndex()

var numbers = [4, 9, 16, 25, 29];
var a = numbers.findIndex(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 has index " + a;

function myFunction (value, index, array) {
    return value > 18; 
}