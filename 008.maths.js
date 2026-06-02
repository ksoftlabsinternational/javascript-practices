// Maths Functions

// 1. Absolute Value
// Calculates the absolute value of a number
function absoluteValue(x) {
    return x < 0 ? -x : x;
}

// 2. Power Function
// Calculates the power of a base raised to an exponent
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// 3. Square Root
// Calculates the square root of a number using the built-in Math.sqrt function

function squareRoot(x) {
    return Math.sqrt(x);
}

// 4. Factorial
// Calculates the factorial of a non-negative integer n (n!)
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 5. Greatest Common Divisor (GCD)
// Uses the Euclidean algorithm to calculate the GCD of two numbers
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 6. Least Common Multiple (LCM)
// Calculates the least common multiple of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}  

// 7. Prime Check
// Checks if a number is prime (only divisible by 1 and itself)
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 8. Fibonacci Sequence
// Calculates the nth Fibonacci number using an iterative approach
// Fibonacci is defined as F(n) = F(n-1) + F(n-2) 
// with base cases F(0) = 0 and F(1) = 1

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}   

// 9. Permutations
// Calculates the number of ways to choose r elements 
// from a set of n elements, where order matters
function permutations(n, r) {
    if (r > n) return 0;
    let result = 1;
    for (let i = n; i > n - r; i--) {
        result *= i;
    }
    return result;
}

// 10. Combinations
// Calculates the number of ways to choose r elements 
// from a set of n elements, where order does not matter
function combinations(n, r) {
    if (r > n) return 0;
    return permutations(n, r) / factorial(r);
}

// 11. Logarithm
// Calculates the logarithm of x to the given base
function logarithm(base, x) {
    return Math.log(x) / Math.log(base);
}   

// 12. Modulo
// Calculates the remainder of a divided by b
function modulo(a, b) {
    return a % b;
}   

// 13. Absolute Difference
// Calculates the absolute difference between two numbers
function absoluteDifference(a, b) {
    return absoluteValue(a - b);
}

// 14. Percentage
// Calculates the percentage of a part relative to a total
function percentage(part, total) {
    if (total === 0) return 0;
    return (part / total) * 100;
}

// 15. Rounding
// Rounds a number to a specified number of decimal places

function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

// 16. Random Number Generation
// Generates a random integer between min and max (inclusive)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Example usage:
//console.log(absoluteValue(-5)); // Output: 5
// console.log(power(2, 3)); // Output: 8
// console.log(squareRoot(16)); // Output: 4
// console.log(factorial(5)); // Output: 120  
// console.log(gcd(48, 18)); // Output: 6
// console.log(lcm(4, 6)); // Output: 12
// console.log(isPrime(7)); // Output: true
// console.log(fibonacci(10)); // Output: 55
// console.log(permutations(5, 2)); // Output: 20
// console.log(combinations(5, 2)); // Output: 10
// console.log(logarithm(2, 8)); // Output: 3
// console.log(modulo(10, 3)); // Output: 1
// console.log(absoluteDifference(5, 3)); // Output: 2
// console.log(percentage(50, 200)); // Output: 25
// console.log(round(3.14159, 2)); // Output: 3.14
// console.log(random(1, 100)); // Output: Random integer between 1 and 100  


// Other Math functions

// console.log(Math.E); // 2.718281828459045
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LOG2E); // 1.4426950408889634
// console.log(Math.LOG10E); // 0.4342944819032518
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.SQRT1_2); // 0.7071067811865476
// console.log(Math.SQRT2); // 1.4142135623730951 
  
