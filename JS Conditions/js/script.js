// JavaScript if else and else if

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// 1. The if Statement

// if(new Date().getHours() < 18) {
//     document.getElementById("demo").innerHTML = "Good day!";
// }

// 2. The else Statement


// function myFunction () {
//     var hour = new Date().getHours();
//     var greeting;
//     if (hour < 21) {
//         greeting = "Good day!";
//     } else {
//         greeting = "Good Evening!";
//     }
//     document.getElementById("demo").innerHTML = greeting;
// }

// 3. The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

function myFunction () {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good Morning!";
    } else if (time < 20) {
        greeting = "Good day!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("demo").innerHTML = greeting;
}