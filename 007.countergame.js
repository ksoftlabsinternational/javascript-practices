//Lets create a simple game where two players take turns to reduce a number n to 1. The rules are as follows:
//1. If n is even, reduce n to n/2.
//2. If n is odd, reduce n to n-1.
//The player who reduces the number to 1 wins the game. You are the first player and your friend is the second player. Assuming both players play optimally, find who will win the game.

// function counterGame(n) {
//     let count = 0;
//     while (n > 1) {
//         if ((n & (n - 1)) === 0) {
//             n = n / 2;
//         } else {
//             n = n - 1;
//         }
//         count++;
//     }
//     return count % 2 === 0 ? 'Richard' : 'Louise';
// }

// // console.log(counterGame(6)); // Output: 'Richard'
// // console.log(counterGame(132)); // Output: 'Louise'

// //let's apply this in html form

       

// function playGame() {
//     const numberInput = document.getElementById('numberInput');
//     const n = parseInt(numberInput.value);
//     if (isNaN(n) || n < 1) {
//         alert('Please enter a valid positive integer.');
//         return;
//     }
//     const result = counterGame(n);
//     document.getElementById('result').textContent = `The winner is: ${result}`;
// }
  

//lets create a simple counter game with three buttons, 
//increase, decrease and reset. 
//The player can click the increase button to increase the counter 
//by 1, the decrease button to decrease the counter by 1,
//and the reset button to reset the counter to 0. 
// The player wins when the counter reaches 10.

let counter = 0;

function increase() {
    counter++;
    updateCounter();
    checkWin();
}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter').textContent = counter;
}

function checkWin() {
    if (counter >= 10) {
        alert('Congratulations! You win!');
        reset();
    }
}

// HTML structure for the counter game
/*
<div>
    <h1>Counter Game</h1>
    <p id="counter">0</p>
    <button onclick="increase()">Increase</button>
    <button onclick="decrease()">Decrease</button>
    <button onclick="reset()">Reset</button>
</div>
*/  