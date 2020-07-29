// var number = 16+"Volvo";

// document.getElementById("demo").innerHTML=number;

// var n="Volvo"+16+4;
// document.getElementById("demo").innerHTML=n;

// var n=16+4+"Volvo";
// document.getElementById("demo").innerHTML=n;

/*  JavaScript Types are Dynamic */

// var x;
// x="John";
// x=5;
// document.getElementById("demo").innerHTML=x;

/* JavaScript Strings */

// var text1="Volvo XC60";
// var text2='Volvo CX60';

// document.getElementById("demo").innerHTML=text1 + "<br><br>" + text2;


// var textNumber1=`It's alright, Freddy!`;
// var textNumber1="It's alright, Freddy!";
// var textNumber2="He is called'Johny'";
// var textNumber3='He is called "Johny"';

// document.getElementById("delta").innerHTML=textNumber1+"<br>"+textNumber2+"<br>"+textNumber3;

/* DECIMALS */

// var number1=34.00;
// var number2=34;
// var number3=3.14;

// document.getElementById("delta").innerHTML=number1+"<br>"+number2+"<br>"+number3;

/*Extra large or extra small numbers can be written with scientific (exponential) notation:*/

// var number1=321000000;
// var number2=0.00123;

// var number1=123e5;
// var number2=123e-5;

// document.getElementById("delta").innerHTML=number1+"<br>"+number2;

/*JavaScript Booleans*/

// var a=3;
// var b=3;
// var c=5;

// (a==b) // Returns TRUE
// (a==c) // Returns FALSE

// document.getElementById("delta").innerHTML=(a==b)+"<br>"+(b==c);

/* JavaScript Arrays */


// var lista = ["Mercedes","BMW", "Renault"];


// document.getElementById("cars").innerHTML=lista[0];
// document.getElementById("cars").innerHTML=lista[1];
// document.getElementById("cars").innerHTML=lista[1];
// document.getElementById("cars1").innerHTML=lista[2];

/* JavaScript Objects */

// var person ={
//     firstName:"John", 
//     secondName:"Deakon", 
//     age:50, 
//     eyeColor:'green'
// };

// document.getElementById("object").innerHTML=person.firstName + " is alredy " + person.age + " years old.";

/* The typeof Operator */


// document.getElementById("object").innerHTML=typeof""+"<br>"+typeof"Igor"+"<br>"+typeof"Igor Torgaiev";

// typeof "" // Returns "string"
// typeof "Igor" // Returns "string"
// typeof "Igor Torgaiev" // Returns "string"

/* The typeof operator returns the type of a variable or an expression. */

// document.getElementById("object").innerHTML=
// typeof(3.14)+"<br>"+ //returns Number
// typeof 314+"<br>"+ //returns Number
// typeof 3.41+"<br>"+ //returns Number
// typeof 0 +"<br>"+ //returns Number
// typeof (0); //returns Number


/* The value (and the data type) of a variable with no value is undefined.*/

// var car;

// document.getElementById("object").innerHTML=
// car+"<br>"+ // undefined
// typeof car; // undefined 

/* Variables can be emptied if you set the value to undefined.*/

// var undefined;

// document.getElementById("object").innerHTML=
// typeof undefined +"<br>"+ 
// typeof""; // returns "string"


// var car = "Infiniti";
// car=undefined;
// document.getElementById("object").innerHTML=
// car+"<br>"+ // returns undefined
// typeof car; // returns undefined


/* Empty Values */

// var car="";

// document.getElementById("object").innerHTML="The value is: "+
// car+"<br>"+
// "The type is " + typeof car;


/* Null */ 


// var object={
//     firstName: "Igor",
//     secondName: "Torgaiev",
//     eyeColor: "brown",
//     hisAge: 28,
//     hisHobby: "programming"
// };
// object=null;
// // document.getElementById("man").innerHTML= object.firstName +" "+ object.secondName + " is now " + object.hisAge + " and he enjoys programming";
// document.getElementById("man").innerHTML=typeof object;

// var biography={
//     firstName:"Jason",
//     secondName:"Statham",
//     age: 28,
//     hobby: "sports"
// };
// biography=null;
// biography=undefined;
// document.getElementById("man").innerHTML=biography;

/* Undefined and null are equal in value but different in type: */

// var person={
//     firstName:"Igor",
//     secondName:"Torgaiev",
//     age:28,
//     hobby:"programming",
//     game:"football"
// };

// person=object;
// document.getElementById("man").innerHTML=person.firstName+" "+ person.secondName+" "+" likes playing football";
// document.getElementById("man").innerHTML=typeof person; 
// person=null;
// document.getElementById("man").innerHTML= typeof person; //here we use person=null;

// document.getElementById("man").innerHTML=person.firstName+" "+ person.secondName+" "+" likes playing football";


// document.getElementById("man").innerHTML=typeof undefined+"<br>"+typeof null+"<br><br>"+(null===undefined)+"<br>"+(null==undefined);

/* The typeof operator returns the type of a variable or an expression.*/

// var person={
//     firstName:"Igor",
//     secondName:"Torgaiev",
//     myAge:28,
//     amount:3,
//     hobby:"programming",
//     game:"football"
// };

// document.getElementById("typeof").innerHTML=typeof person.firstName +"<br>"+ typeof person.myAge +"<br>"+ typeof (null===undefined) +"<br>"+ typeof(null==undefined)+"<br>" +typeof (hobby=undefined);

// Below is the alternative solution
// document.getElementById("typeof").innerHTML=typeof "Torgaiev" +"<br>"+ typeof 28 +"<br>"+ typeof true +"<br>"+ typeof false+"<br>" +typeof z;


/*  The typeof operator returns object for both objects, arrays, and null.
The typeof operator does not return object for functions. */

document.getElementById("typeof").innerHTML=typeof {firstName:"Igor", myAge:28}+"<br>"+typeof [1,2,3,4,5]+"<br>"+typeof null+"<br>"+typeof function myFunction (){};