// Constants in JavaScript

// A constant is a variable that cannot be reassigned after it has been declared. 
// In JavaScript, you can declare a constant using the `const` keyword.

const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Attempting to reassign a constant will result in an error
// PI = 3.14; // This will throw an error: TypeError: Assignment to constant variable.

// Constants can also be used to store objects and arrays, but the contents of the object or array can still be modified.

const myArray = [1, 2, 3];
myArray.push(4); // This is allowed
console.log(myArray); // Output: [1, 2, 3, 4]

const myObject = { name: "Alice", age: 30 };
myObject.age = 31;
console.log(myObject); // Output: { name: "Alice", age: 31 }

// However, you cannot reassign the entire object or array to a new value
//myObject = { name: "Bob", age: 25 }; // This will throw an error: TypeError: Assignment to constant variable.

//lets calculate the area of a circle using the constant PI
const radius = 5;
const area = PI * radius * radius;
console.log(`The area of the circle with radius ${radius} is ${area}`); // Output: The area of the circle with radius 5 is 78.53975

//capital letters are often used for constants to make them easily identifiable in the code.




// In summary, constants in JavaScript are declared using the `const` keyword and cannot be reassigned after they have been initialized. They can hold primitive values, objects, and arrays, but the reference to the object or array cannot be changed.
