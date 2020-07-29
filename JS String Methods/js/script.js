// var x="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// document.getElementById("length").innerHTML=x.length;

// JavaScript String Methods

// var txt="Hello, my lovely and dear world!";
// var pos=txt.indexOf("dear");
// document.getElementById("demo").innerHTML=pos;

// var txt="Please, place where 'please' should be";
// var pos=txt.lastIndexOf("place");
// document.getElementById("demo").innerHTML=pos;

// Both indexOf(), and lastIndexOf()

// var z = "Hey, guys, what's up?!";
// var txt = z.indexOf("Gary");

// document.getElementById("demo").innerHTML=txt;

// var x = "Hello, let's go to the beach 'beach'";
// var txt = x.indexOf("beach",15);
// document.getElementById("demo").innerHTML=txt;

// Searching for a String in a String

// var txt = "Hey, man. any plans 'cinema' for today?";
// var book = txt.search("cinema");
// document.getElementById("demo").innerHTML=book;

// The slice() Method

// var x = "Black, White, Orange";
// var txt = x.slice(7,13);
// document.getElementById("demo").innerHTML=txt;

// var z = "Chocolate, Cookie, Milk";
// var txt = z.slice(-12,-6);
// document.getElementById("demo").innerHTML=txt;

// var z = "Chocolate, Cookie, Milk";
// var txt = z.slice(-12);
// document.getElementById("demo").innerHTML=txt;

// Replacing String Content

// function myFunction() {
//     var str = document.getElementById("demo").innerHTML;
//     var txt = str.replace("Microsoft", "W3Schools");
//     document.getElementById("demo").innerHTML = txt;
// }

// function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     var txt = str.replace("Microsoft", "W3Schools");
//     document.getElementById("demo").innerHTML = txt;
// }

// function myFunction () {
//     var txt = document.getElementById("demo").innerHTML;
//     var str = txt.replace(/MICROSOFT/i, "W3Schools");
//     document.getElementById("demo").innerHTML=str;
// }

// Converting to Upper and Lower Case

// function myFunction () {
//     var str = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML=str.toUpperCase();
// }

// function myFunction () {
//     var text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML=text.toLocaleLowerCase();
// }

// The concat() method

// var text1 = "Hello";
// var text2 = "Dear";
// var text3 = "Friend";
// var text4 = text1.concat(" ", text2, " ", text3);
// document.getElementById("demo").innerHTML=text4;

// String.trim()

// function myFunction () {
//     var text = "    Hello, everybody!    ";
//     alert(text.trim());
// }

// The charAa() method

// var x = "Hello world";
// document.getElementById("demo").innerHTML = x.charAt(1);

// charCodeAt() method

// var y = "Hey, hey, what's going on?";
// document.getElementById("demo").innerHTML = y.charCodeAt(0);

// ECMAScript 5 

// var text = "Generally speakin, this is capacity";
// document.getElementById("demo").innerHTML=text[4];

// Click "Try it"

// function myFunction () {
//     var str = "z,x,c,v,b,n,m";
//     var arr = str.split(",");
//     document.getElementById("demo").innerHTML = arr[3];
// }

// The letter are ordered vertically

// var str = "Hello, Freddy!";
// var arr = str.split("");
// var txt = "";
// var i;
// for (i = 0; i < arr.length; i++) {
//     txt += arr[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;

