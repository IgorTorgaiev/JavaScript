// 1.  Math.PI
// document.getElementById("demo").innerHTML = Math.PI;

// 2. Math.round()
// document.getElementById("demo").innerHTML = Math.round(4.4);

// 3. Math.pow()
// document.getElementById("demo").innerHTML = Math.pow(3,3);

// 4. Math.sqrt()
// document.getElementById("demo").innerHTML = Math.sqrt(64);

// 5. Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
// document.getElementById("demo").innerHTML = Math.abs(-10);

// 6. Math.ceil()
// document.getElementById("demo").innerHTML = Math.ceil(5.3);

// 7. Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
// document.getElementById("demo").innerHTML = Math.floor(6.8);

// 8. Math.sin()
// document.getElementById("demo").innerHTML = Math.sin(90 * Math.PI/180);

// 9. Math.cos()
// document.getElementById("demo").innerHTML = Math.cos(45 * Math.PI/180);

// 10. JavaScript Math.min()
// document.getElementById("demo").innerHTML = 
// Math.min(0, 10, 190, -11, 5, -22, 17, 9);

// 11. JavaScript Math.max()
// document.getElementById("demo").innerHTML = 
// Math.max(-100, 2, 5, 15, 10, 200, 21, 71);

//  12. Math.random()
// document.getElementById("demo").innerHTML = Math.random();

// 13. Random Integers
// document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10);
// document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10) + 1;

// 14. A Proper Random Function
// Every time you click the button, getRndInteger(min, max) returns a random number between 0 
// and 9 (both included):

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

