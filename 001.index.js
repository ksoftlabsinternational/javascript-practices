//variables

let age = 25;
let price = 109.99;
let gpa = 3.4;

//output using template literals - allows us to embed expressions inside string literals, using backticks (`) and ${} syntax
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);

//output type of variables
console.log(`The type of age is ${typeof age}`);
console.log(`The type of price is ${typeof price}`);
console.log(`The type of gpa is ${typeof gpa}`);

//alternatively, we can use the typeof operator directly
console.log(typeof age); //number
console.log(typeof price); //number
console.log(typeof gpa); //number


//Strings

let name = "Kevin Omondi";
let greeting = "Hello, World!";

//output string variables
console.log(`My name is ${name}`);
console.log(greeting);

//string concatenation
let fullName = name + " - Software Developer";
console.log(fullName);

//Booleans 
//Either true or false

let isOnline = true;
let isAdmin = false;

console.log(`Is the user online? ${isOnline}`);
console.log(`Is the user an admin? ${isAdmin}`);

//Null and Undefined

let middleName = null; //explicitly set to null, meaning no value
let lastName; //undefined, not assigned a value yet

console.log(`Middle Name: ${middleName}`); //null
console.log(`Last Name: ${lastName}`); //undefined