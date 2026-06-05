// IF Statements
// If statements are used to execute a block 
// of code only if a specified condition is true. 
// We can also use else and else if to specify additional
// conditions and code blocks to execute if those conditions
// are true.

// Syntax:
// if (condition) {
//   // code to be executed if the condition is true
// }

// Example:
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Lets use else if to check for multiple conditions
let score = 85;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C!");
} else if (score >= 60) {
  console.log("You got a D!");
} else {
  console.log("You got an F!");
}

// We can also use nested if statements to check for multiple
// conditions. Example: to check if a number is positive,
// negative, or zero, and if it is even or odd.
let number = 6;

if (number > 0) {
  console.log("The number is positive.");
  if (number % 2 === 0) { // comparison operator == checks for equality, === checks for strict equality (value and type)
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
} 

// In summary, if statements are a fundamental part of programming that allow us to control the flow of our code based on certain conditions. 
// They are essential for making decisions and creating dynamic behavior in our programs.

//Assignment: Write a program that takes a user's input for their age
//and checks if they are eligible to vote (18 years or older).
//If they are eligible, print "You can vote!" Otherwise, print "You cannot vote yet."

// let userAge = prompt("Please enter your age:");

// if (userAge >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote yet.");
// }  