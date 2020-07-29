// 1.Creating an Array

// var cars = Array("BMW" , "Toyota" , "Daewoo");
// document.getElementById("demo").innerHTML = cars;

// var cars1 = new Array("Mercedes", "Mazda", "Jeep");
// document.getElementById("demo1").innerHTML = cars1;

// var cars = Array("Toyota", "BMW", "Mercedes", "Range Rover");
// cars[0] = "Volga";
// document.getElementById("demo").innerHTML = cars;

// 2. Object

// var person = {
//     name: "John",
//     surname: "Connor",
//     age: 19
// };
// document.getElementById("demo").innerHTML = person["name"];


// 3. The length Property

// var fruits = ["Plum", "Apple", "Banana", "Strawberry"];
// document.getElementById("demo").innerHTML = fruits.length;

// Accessing the First Array Element
// var fruits = ["Berry", "Plum", "Melon", "Lemon"];
// var first  = fruits[1];
// document.getElementById("demo").innerHTML = first;

// 4. Accessing the Last Array Element

// var cars = ["Mazda", "Mercedes", "BMW", "Toyota"];
// var last = cars[cars.length-2];
// document.getElementById("demo").innerHTML = last;

// 5. Looping Array Elements

// var books, tekst, fLen, i;
// books = ["Tracy", "Kiyosaki", "Carnegie", "Kowie"];
// fLen = books.length;

// tekst = "<ul>";
// for (i = 0; i < fLen; i++) {
//     tekst += "<li>" + books[i] + "</li>";
// }
// tekst += "</ul>";

// document.getElementById("demo").innerHTML = tekst;

// 6. Adding Array Elements

// var groups = ["Beatles", "ACDC", "Scorpions", "Queen"];
// document.getElementById("demo").innerHTML = groups;

// function myFunction () {
//     groups.push("Metallica");
//     document.getElementById("demo").innerHTML = groups;
// }

// var cars = ["Toyota", "BMW", "Toyota", "Mercedes"];
// document.getElementById("demo").innerHTML = cars;

// function myFunction () {
//     cars[cars.length]="Opel";
//     document.getElementById("demo").innerHTML = cars;
// }

// 7. Associative Arrays

// var person = [];
// person [0] = "Igor";
// person [1] = "Torgaiev";
// person [2] = "programmer";
// person [3] = 28;
// document.getElementById("demo").innerHTML = 
// person[1] + " " + person.length;

// var person = [];
// person ["firstName"] = "Igor";
// person ["secondName"] = "Torgaiev";
// person ["job"] = "programmer";
// person ["age"] = 28;
// document.getElementById("demo").innerHTML = 
// person[1] + " " + person.length;

//  8. Avoid new Array()

// var points = [1,34,61,23,2,7,38];
// document.getElementById("demo").innerHTML = points[3];

// 9. Typeof operator

// var vegetables = ["Tomato", "Cucumber", "Pepper"];
// document.getElementById("demo").innerHTML = typeof vegetables;


// 10. ECMASCRIPT 5 method 

// var cars = ["BMW", "Toyota", "Mercedes", "Mazda"];
// document.getElementById("demo").innerHTML = Array.isArray(cars);