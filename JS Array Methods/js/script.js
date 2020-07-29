// 1. Converting Arrays to Strings

// var cars = ["Range Rover", " Toyota", " BMW", " Mazda"];
// document.getElementById("demo").innerHTML = cars.toString();

// 2. The join() method

// var cars = ["Range Rover", " Toyota", " BMW", " Mazda"];
// document.getElementById("demo").innerHTML = cars.join(" * ");


// 3.1. Popping
// var cars = ["Range Rover", " Toyota", " BMW", " Mazda"];
// document.getElementById("demo1").innerHTML = cars;
// document.getElementById("demo2").innerHTML = cars.pop();
// document.getElementById("demo3").innerHTML = cars;

// 3.2. Pushing

// var cars = ["Range Rover", "Toyota", "BMW", "Mazda"];
// document.getElementById("demo1").innerHTML = cars;

// function myFunction() {
//     document.getElementById("demo2").innerHTML = cars.push("Mercedes Benz");
//     document.getElementById("demo1").innerHTML = cars;
// }

// 4. Shifting Elements

// var cars = ["Range Rover", "Toyota", "BMW", "Mazda"];
// document.getElementById("demo1").innerHTML = cars;
// cars.shift();
// document.getElementById("demo2").innerHTML = cars;

// var cars = ["Range Rover", "Toyota", "BMW", "Mazda"];
// document.getElementById("demo1").innerHTML = cars;
// document.getElementById("demo2").innerHTML = cars.shift();
// document.getElementById("demo3").innerHTML = cars;

// 5. The unshift() method

// var fruits = ["Raspberry", "Strawberry", "Lemon", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// document.getElementById("demo2").innerHTML = fruits.unshift("Peach");
// document.getElementById("demo3").innerHTML = fruits;

// 6. Changing Elements

// var groups = ["ACDC", "Scorpions", "Beatles", "Queen"];
// document.getElementById("demo1").innerHTML = groups;
// groups[0] = "Sting";
// document.getElementById("demo2").innerHTML = groups;

// var groups = ["ACDC", "Scorpions", "Beatles", "Queen"];
// document.getElementById("demo1").innerHTML = groups;

// function myFunction () {
//     groups[groups.length] = "Sting";
//     document.getElementById("demo1").innerHTML = groups;
// }

// 7. Deleting Elements

// var groups = ["ACDC", "Scorpions", "Beatles", "Queen"];
// document.getElementById("demo1").innerHTML = "I like the group called " + groups[1];

// delete groups[1];
// document.getElementById("demo2").innerHTML = "I like the group called " + groups[1];

// 8. Splicing an Array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = "Original Array:<br>" + fruits;

// function myFunction () {
//     var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
//     document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
//     document.getElementById("demo3").innerHTML = "Removed elements:<br>" + removed;
// }

//  9. Using splice() to Remove Elements

// var numbers = ["First", "Second", "Third", "Fourth"];
// document.getElementById("demo1").innerHTML = numbers;

// function myFunction () {
//     numbers.splice(0,1);
//     document.getElementById("demo1").innerHTML = numbers;
// }

// 10. Merging (Concatenating) Arrays

// var myClothes = ["Jacket", "Jeans", "T-Shirt"];
// var myBooks = ["Tracy", "Kiyosaki", "Carnegie"];
// var myHobby = myClothes.concat(myBooks);

// document.getElementById("demo1").innerHTML = myHobby;

// 11. Example (Merging an Array with Values)

// var myRange = ["First", "Second", "Third", "Fourth"];
// var myResult = myRange.concat("Five");
// document.getElementById("demo1").innerHTML = myResult;

// 12. Slicing an Array

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var food = fruits.slice(1);

// document.getElementById("demo1").innerHTML = fruits +"<br><br>" + food;

// 13. The toString() method 

var array = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = array.toString();