//Arithmetic Operators
//operators that perform arithmetic on numbers (literals or variables).
//They include addition (+), 
// subtraction (-),
// multiplication (*)
// division (/)
// modulus (%),
// increment (++) and decrement (--).


let a = 10;
let b = 5;

console.log(`a + b = ${a + b}`); //15
console.log(`a - b = ${a - b}`); //5
console.log(`a * b = ${a * b}`); //50
console.log(`a / b = ${a / b}`); //2
console.log(`a % b = ${a % b}`); //0

//increment and decrement
let count = 0;
count++; //increment by 1
console.log(`Count after increment: ${count}`); //1

count--; //decrement by 1
console.log(`Count after decrement: ${count}`); //0

//we can also use the operators in compound assignment form
let x = 10;
x += 5; //equivalent to x = x + 5
console.log(`x after += 5: ${x}`); //15

x -= 3; //equivalent to x = x - 3
console.log(`x after -= 3: ${x}`); //12

x *= 2; //equivalent to x = x * 2
console.log(`x after *= 2: ${x}`); //24

x /= 4; //equivalent to x = x / 4
console.log(`x after /= 4: ${x}`); //6

x %= 5; //equivalent to x = x % 5
console.log(`x after %= 5: ${x}`); //1 

//Exponentiation operator (**)
let base = 2;
let exponent = 3;
console.log(`base ** exponent = ${base ** exponent}`); //8 (2 raised to the power of 3)



//operator precedence
//parentheses have the highest precedence,
//followed by exponentiation,
//then multiplication/division/modulus,
//and finally addition/subtraction

let result = 2 + 3 * 4; //multiplication happens first, result is 14
console.log(`Result of 2 + 3 * 4: ${result}`);

result = (2 + 3) * 4; //parentheses change the order, result is 20
console.log(`Result of (2 + 3) * 4: ${result}`);

result = 2 ** 3 * 4; //exponentiation happens first, result is 32
console.log(`Result of 2 ** 3 * 4: ${result}`);

result = 2 ** (3 * 4); //parentheses change the order, result is 4096
console.log(`Result of 2 ** (3 * 4): ${result}`);           
