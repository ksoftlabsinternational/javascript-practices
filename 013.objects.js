//Objects in Javacsript

//Objects are collections of key-value pairs. 
//They can be used to store and organize data in a structured way.
//In JavaScript, objects can be created using object literals,
//constructors, or classes.
//They are used to represent real-world entities and their properties and behaviors.
//Objects can contain properties (data) and methods (functions that operate on the data).

//1. Object Literals
// The most common way to create an object is using object literals, which are defined using curly braces {}.
// An object literal is a comma-separated list of key-value pairs enclosed in curly braces.
//A literal is a fixed value that is directly written in the code, as opposed to a variable that can change.

let person = {
    name: "Alice", // property name with a string value
    age: 30, // property age with a number value
    city: "New York", // property city with a string value
    greet: function() { // method greet which is a function that prints a greeting message
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // using template literals to access the properties of the object using this keyword
    }
};
//Note about 'this' keyword: In JavaScript, the 'this' keyword refers to the current object that is executing the code. 
//In the context of an object method, 'this' refers to the object itself, allowing us to access its properties and methods.


// We can access the properties of the object using dot notation or bracket notation.
console.log(person.name); // Alice
// Dot notation is the most common way to access properties, where we use the object name followed by a dot and the property name.

console.log(person["city"]); // New York
// Bracket notation allows us to access properties using a string key, which is useful when the property name is stored in a variable or contains special characters.
console.log(person["age"]); // 30

// We can also call the method of the object by using dot notation. 
// As in, we start with the object name, followed by a dot, 
// and then the method name with parentheses to execute it.
person.greet(); // Hello, my name is Alice and I am 30 years old.


// We can also add new properties and methods to the object after it has been created.
person.job = "Software Developer"; // adding a new property job with a string value
person.sayJob = function() { // adding a new method sayJob which is a function that prints the job of the person
    console.log(`I am a ${this.job}.`); // using template literals to access the job property of the object using this keyword
};

console.log(person.job); // Software Developer
person.sayJob(); // I am a Software Developer.

// We can also delete properties and methods from the object using the delete operator.
delete person.city; // deleting the city property from the person object
delete person.sayJob; // deleting the sayJob method from the person object

console.log(person.city); // undefined, since the city property has been deleted
console.log(person.sayJob); // undefined, since the sayJob method has been deleted

//Assignment 1: Create an object representing a book with properties like title, author, and year, and a method to display the book's information in a formatted string.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    displayInfo: function() {
        console.log(`Book Information: "${this.title}" by ${this.author}, published in ${this.year}`);
    }
};

book.displayInfo(); // Book Information: "The Great Gatsby" by F. Scott Fitzgerald, published in 1925

//Quiz: What are objects in JavaScript and how can they be created?
//Answer: Objects in JavaScript are collections of key-value pairs that can contain properties (data) and methods (functions that operate on the data). They can be created using object literals, constructors, or classes. Object literals are defined using curly braces {} and contain a comma-separated list of key-value pairs. Constructors are functions that are used to create multiple instances of an object with the same properties and methods. Classes provide a more elegant and concise way to create objects and handle inheritance.

//Assignment 2: Create an object that uses variables to store the properties of a person, and a method to display the person's information in a formatted string.

let name = "Kevin Omondi";
let age = 25;
let city = "Nairobi";

let persons = {
    name: name, // using variables to assign values to the properties of the object
    age: age,
    city: city,
    displayInfo: function() { // method to display the person's information in a formatted string
        console.log(`Person Information: ${this.name}, ${this.age} years old, lives in ${this.city}`);
    }
};

persons.displayInfo(); // Person Information: Kevin Omondi, 25 years old, lives in Nairobi



//2. Object Constructors
// We can also create objects using constructors, 
// which are functions that are used to create multiple instances of an object with the same properties and methods.

function Person(name, age, city) { // constructor function that takes parameters to initialize the properties of the object
    this.name = name; // assigning the name parameter to the name property of the object
    this.age = age; // assigning the age parameter to the age property of the object
    this.city = city; // assigning the city parameter to the city property of the object
    this.greet = function() { // method greet which is a function that prints a greeting message
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // using template literals to access the properties of the object using this keyword
    }
}

//So our object here is a Person, and we can create multiple instances of the Person object using the constructor function.

//Note about 'this' keyword: In JavaScript, the 'this' keyword refers to the current object that is executing the code. 
//In the context of a constructor function, 'this' refers to the new object being created, allowing us to assign properties and methods to it.

//Look at this multiple instances of the Person object using the constructor function. Each instance will have its own properties and methods, but they will all share the same structure defined by the constructor function.

let person1 = new Person("Bob", 25, "Los Angeles"); // creating a new instance of the Person object using the constructor function
let person2 = new Person("Charlie", 35, "Chicago"); // creating another instance of the Person object using the constructor function
let personed = new Person("Kevin Omondi", 25, "Nairobi"); // creating another instance of the Person object using the constructor function

console.log(person1.name); // Bob
console.log(person2.age); // 35
console.log(personed.city); // Nairobi
person1.greet(); // Hello, my name is Bob and I am 25 years old.
person2.greet(); // Hello, my name is Charlie and I am 35 years old.
personed.greet(); // Hello, my name is Kevin Omondi and I am 25 years old.


//Assignment 3: Create an object constructor for a school with properties like name, location, and a method to display the school's information in a formatted string.

function School(name, location) { // constructor function that takes parameters to initialize the properties of the object
    this.name = name; // assigning the name parameter to the name property of the object
    this.location = location; // assigning the location parameter to the location property of the object
    this.displayInfo = function() { // method to display the school's information in a formatted string
        console.log(`School Information: ${this.name}, located in ${this.location}`);
    }
}

let school1 = new School("Greenwood High", "New York"); // creating a new instance of the School object using the constructor function
let school2 = new School("Lakeside Academy", "Chicago"); // creating another instance of the School object using the constructor function

school1.displayInfo(); // School Information: Greenwood High, located in New York
school2.displayInfo(); // School Information: Lakeside Academy, located in Chicago


//3. Classes
// In ES6, JavaScript introduced classes, which are syntactical sugar over constructor functions. They provide a more elegant and concise way to create objects and handle inheritance.
//ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many new features and syntax improvements, including classes, arrow functions, template literals, destructuring, and more. It is widely supported in modern browsers and has become the standard for writing JavaScript code.
class PersonClass { // defining a class named PersonClass
    constructor(name, age, city) { // constructor method that takes parameters to initialize the properties of the object
        this.name = name; // assigning the name parameter to the name property of the object
        this.age = age; // assigning the age parameter to the age property of the object
        this.city = city; // assigning the city parameter to the city property of the object
    }

    greet() { // method greet which is a function that prints a greeting message
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // using template literals to access the properties of the object using this keyword
    }
}

let person3 = new PersonClass("David", 28, "Miami"); // creating a new instance of the PersonClass using the class syntax

console.log(person3.city); // Miami

person3.greet(); // Hello, my name is David and I am 28 years old.


//Here is the difference between constructor functions and classes:
//1. Syntax: Classes use a more concise and elegant syntax compared to constructor functions, making them easier to read and write.
//2. Inheritance: Classes provide built-in support for inheritance through the extends keyword, allowing us to create subclasses that inherit properties and methods from a parent class. Constructor functions require manual setup for inheritance using prototypes.
//3. Static Methods: Classes can have static methods that are called on the class itself, rather than on instances of the class. Constructor functions do not have this feature.
//4. Hoisting: Constructor functions are hoisted, meaning they can be called before they are defined in the code. Classes are not hoisted, so they must be defined before they are used.

//The difference between object literals, constructor functions, and classes is mainly in their syntax and how they handle inheritance. Object literals are the simplest way to create a single object, while constructor functions and classes allow us to create multiple instances of an object with the same structure. Classes provide a more modern and elegant syntax for creating objects and handling inheritance compared to constructor functions.
//Looking at the above examples:
// Object constructor function example and class example differ this way:
//1. Syntax: The constructor function uses a function declaration with the function keyword, while the class uses the class keyword and a constructor method to initialize the properties of the object.
//2. Inheritance: The class syntax provides built-in support for inheritance through the extends keyword, while the constructor function requires manual setup for inheritance using prototypes.
//3. Static Methods: The class syntax allows for static methods that can be called on the class itself, while the constructor function does not have this feature.
//4. Hoisting: Constructor functions are hoisted, meaning they can be called before they are defined in the code, while classes are not hoisted and must be defined before they are used.
//5. The greet method in the constructor function is defined as a property of the object, while in the class it is defined as a method of the class, which is more efficient and memory-friendly since it is shared among all instances of the class.


//Assignemt 4: Create a class for a library with properties like name, address, and a method to display the library's information in a formatted string.

class Library { // defining a class named Library
    constructor(name, address) { // constructor method that takes parameters to initialize the properties of the object
        this.name = name; // assigning the name parameter to the name property of the object
        this.address = address; // assigning the address parameter to the address property of the object
    }

    displayInfo() { // method to display the library's information in a formatted string
        console.log(`Library Information: ${this.name}, located at ${this.address}`);
    }
}

let library1 = new Library("Central Library", "123 Main St"); // creating a new instance of the Library class using the class syntax
let library2 = new Library("Downtown Library", "456 Oak Ave"); // creating another instance of the Library class

library1.displayInfo(); // Library Information: Central Library, located at 123 Main St
library2.displayInfo(); // Library Information: Downtown Library, located at 456 Oak Ave

// In summary, objects are a fundamental part of JavaScript that allow us to store and organize data in a structured way. 
// They can be created using object literals, constructors, or classes, and they can contain properties and methods that define their behavior. 
// Understanding how to work with objects is essential for writing effective JavaScript code.

//Assignment 5: Create an object representing a car with properties like make, model, year, and a method to display the car's information in a formatted string.

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    displayInfo: function() {
        console.log(`Car Information: ${this.year} ${this.make} ${this.model}`); // using template literals to format the output as "Car Information: year make model"
    }
};

car.displayInfo(); // Car Information: 2020 Toyota Camry


//Adios chao!(Goodbye) Mucho gusto!(Nice to meet you) Nos vemos!(See you later)
