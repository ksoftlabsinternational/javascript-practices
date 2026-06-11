//Loops In JavaScript

// Loops are used to repeat a block of code 
// a certain number of times or until a certain condition is met. 
// They are essential for performing repetitive tasks 
// without having to write the same code multiple times.

// There are several types of loops in JavaScript, including:

// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...in Loop
// 5. For...of Loop

// Let's go through each type of loop with examples.

// 1. For Loop
// The for loop is used when you know in advance how 
// many times you want to execute a block of code.

for (let i = 0; i < 5; i++) {
  console.log("The value of i is: " + i);
}

//Explanation:
// The for loop consists of three parts:
// 1. Initialization: let i = 0; (this is executed once at the beginning of the loop)
// 2. Condition: i < 5; (the loop continues as long as this condition is true)
// 3. Increment/Decrement: i++ (this is executed at the end of each iteration)


// 2. While Loop
// The while loop is used when you want to repeat a block of code 
// as long as a specified condition is true.
console.log("While Loop Example:================================");

let j = 0;

while (j < 5) {
  console.log("The value of j is: " + j);
  j++; // Don't forget to increment j, otherwise it will create an infinite loop
}

//Explanation:
// The while loop checks the condition (j < 5) before executing the block of code. 
// If the condition is true, it executes the code and then checks the condition again. 
// This continues until the condition becomes false.

// 3. Do-While Loop
// The do-while loop is similar to the while loop, 
// but it guarantees that the block of code will be executed 
// at least once, 
// because the condition is checked after the code is executed.

console.log("Do-While Loop Example:================================");

let k = 0;

do {
  console.log("The value of k is: " + k);
  k++;
} while (k < 5);

//Explanation:
// In a do-while loop, the code block is executed first, and then the condition is checked. 
// If the condition is true, the loop continues; if it's false, the loop ends. 
// This means that even if the initial value of k was greater than or equal to 5, 
// the code block would still execute at least once.

//4. For...in Loop
// The for...in loop is used to iterate over the properties of an object.

console.log("For...in Loop Example:================================");

let person = { // an object with properties; objects are collections of key-value pairs
  name: "Alice", // string value
  age: 30, // number value
  city: "New York" 
};

for (let key in person) {  // key is a variable that will hold the name of each property in the person object
  console.log(key + ": " + person[key]); // person[key] is used to access the value of the property with the name stored in key
}

//Explanation:
// The for...in loop iterates over the enumerable properties of an object. 
// In this example, it will print the keys and their corresponding values of the person object.

//Practice: Write a program that takes an object representing a student with properties like name, age, and grade, and uses a for...in loop to print out the student's information in the format "key: value".

let student = {
    name: "Kevin Omondi",
    age: 25,
    grade: "A"
};

for(let key in student)
{
    console.log(`${key}: ${student[key]}`); // using template literals to format the output as "key: value"
}


//5. For...of Loop
// The for...of loop is used to iterate over iterable objects such as arrays, strings, etc.

console.log("For...of Loop Example:================================");

let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}

//Explanation:
// The for...of loop iterates over the values of an iterable object. 
// In this example, it will print each number in the numbers array.

// In summary, loops are a fundamental part of programming that allow us to execute a block of code multiple times based on certain conditions. 
// They help us avoid code repetition and make our programs more efficient and easier to read.

//Assignment: Write a program that prints the numbers from 1 to 10 using a for loop, 
// and then prints the same numbers in reverse order using a while loop.    





