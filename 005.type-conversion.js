//Type conversion in JavaScript

// Type conversion is the process of converting a value from one data type to another. 
// In JavaScript, there are two types of type conversion: implicit and explicit.

// Implicit type conversion, also known as type coercion, occurs when JavaScript automatically converts a value from one type to another. 
// For example, when you use the + operator with a string and a number, JavaScript will convert the number to a string and concatenate them:

let result = "The answer is: " + 42;
console.log(result); // Output: "The answer is: 42"

// In this case, the number 42 is implicitly converted to a string before being concatenated with the other string.
console.log(typeof result); // Output: "string"

// Explicit type conversion, on the other hand, is when you manually convert a value from one type to another using built-in functions or methods. 
// For example, you can use the Number() function to convert a string to a number:

let str = "123";
let num = Number(str);
console.log(num); // Output: 123
console.log(typeof num); // Output: "number"

// You can also use the String() function to convert a number to a string:

let num2 = 456;
let str2 = String(num2);
console.log(str2); // Output: "456"
console.log(typeof str2); // Output: "string"

// Additionally, you can use the Boolean() function to convert a value to a boolean:

let value1 = 0;
let value2 = "Hello";

//you can do it this way

value1 = Boolean(value1);
value2 = Boolean(value2);

//or you can do it this way

console.log(Boolean(value1)); // Output: false
console.log(Boolean(value2)); // Output: true   


// In addition to these functions, JavaScript also provides other methods for type conversion, such as parseInt() and parseFloat() for converting strings to integers and floating-point numbers, respectively.

let intStr = "789";
let floatStr = "3.14";

let intNum = parseInt(intStr);
let floatNum = parseFloat(floatStr);

console.log(intNum); // Output: 789
console.log(floatNum); // Output: 3.14
console.log(typeof intNum); // Output: "number"
console.log(typeof floatNum); // Output: "number"

// It's important to note that type conversion can sometimes lead to unexpected results, especially with implicit type conversion. 
// For example, when you compare a string and a number using the == operator, JavaScript will convert the string to a number before making the comparison:

console.log("5" == 5); // Output: true

// In this case, the string "5" is implicitly converted to the number 5 before the comparison is made, resulting in true. 
// However, if you use the === operator, which checks for both value and type equality, the result will be false:

console.log("5" === 5); // Output: false

// In conclusion, understanding type conversion in JavaScript is crucial for writing effective and bug-free code. 
// Always be mindful of when implicit type conversion may occur and consider using explicit type conversion when necessary to avoid unexpected results.

//Lets use information from a form and return it to the html page

// Assuming you have an HTML form like this:
// <form id="myForm">
//   <input type="text" id="name" placeholder="Enter your name">
//   <input type="number" id="age" placeholder="Enter your age">
//   <button type="submit">Submit</button>
// </form>
// <div id="result"></div>

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the values from the form inputs
  let name = document.getElementById("name").value;
  let ageStr = document.getElementById("age").value;

  //print the type of ageStr to the console
  console.log(typeof ageStr); // Output: "string"

  // Convert the age from string to number
  let age = Number(ageStr);

  //print the type of age to the console
    console.log(typeof age); // Output: "number"

  // Check if the conversion was successful
  //the isNaN() function checks if the value is NaN (Not-a-Number), which indicates that the conversion failed
  if (isNaN(age)) {
    document.getElementById("result").innerText = "Please enter a valid number for age.";
  } else {
    // Display the result on the page
    document.getElementById("result").innerText = `Hello, ${name}! You are ${age} years old.`;
  }
});