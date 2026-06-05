// Random Number Generator

//Lets generate a random number between 1 and 100 using JavaScript. We can use the built-in Math.random() function to achieve this. The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1), which means it can be 0 but not 1. To get a random number between a specific range, we can use the following formula:
let randomNo = Math.floor(Math.random() * 6) + 1; // This will generate a random number between 1 and 6 (inclusive)

console.log(randomNo); // Output the generated random number



//

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const min = 1;
const max = 100;
const randomNumber = generateRandomNumber(min, max);
console.log(`Generated random number between ${min} and ${max}: ${randomNumber}`);