// JavaScript Objects

// var car="Fiat";
// document.getElementById("model").innerHTML=car;

// Create an Object
// var car = {
//     name:"Fiat",
//     color:"white",
//     year:2000
// };

// Display some data from the object:
// document.getElementById("model").innerHTML="The car type is "+ car.name;

// Object Definition


// var man = {
//     firstName:"Igor",
//     secondName:"Torgaiev",
//     age: 28,
//     hobby:"football",
//     movie:"Transporter"
// };

// document.getElementById("biography").innerHTML=man.firstName +" "+ man.secondName + " , who has already" + man.age + " years." + " He likes playing " + man.hobby;

// Accessing Object Properties

// var person = {
//     name:"John",
//     surname:"Doe"
// };

// document.getElementById("biography").innerHTML= person.name +" " + person.surname;
// Alternative solution >>> document.getElementById("biography").innerHTML=person["name"]+" "+person["surname"];

// Object Methods

// Create Object
var man = {
    name:"Jason",
    surname:"Statham",
    fullName: function () {
        return this.name+" "+this.surname;
    }
};
// Display the data from the object:
document.getElementById("name").innerHTML=man.fullName();

// Accessing Object Methods

