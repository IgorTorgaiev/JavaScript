// 1. The switch statement is used to perform different actions based on different conditions.

// var day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }

// document.getElementById("demo").innerHTML =
// "So, today is" + day;

// var text;
// switch (new Date().getDay()) {
//     case 6:
//         text = "Today is Monday";
//         break;
//     case 0:
//         text = "Today is Tuesday";
//         break;
//     default:
//         text="Looking forward to the Weekend";
// }
// document.getElementById("demo").innerHTML = text;

// Also, we can use the Keyword DEFAULT this way (below):

// var text;
// switch (new Date().getDay()) {
//     default:
//         text="Looking forward to the Weekend";
//         break;
//     case 6:
//         text = "Today is Monday";
//         break;
//     case 0:
//         text = "Today is Tuesday";
//         break;
// }
// document.getElementById("demo").innerHTML = text;

// 2. Common Code Blocks

// var text;
// switch (new Date().getDay()) {
//     case 4:
//     case 5:
//         text = "Today is Monday";
//         break;
//     case 6:
//         text = "Today is Tuesday";
//         break;
//     default:
//         text = "Let's go for a walk";
// }
// document.getElementById("demo").innerHTML = text;

var x = "0";
switch(x) {
    case 0:
        text = "On";
        break;
    case 1:
        text = "Off";
        break;
    default:
        text = "None of the value found";
}
document.getElementById("demo").innerHTML = text;