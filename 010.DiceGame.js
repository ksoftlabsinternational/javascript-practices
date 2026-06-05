// Function to roll the dice and return a random number between 1 and 6
//to the html file

function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    document.getElementById('result').textContent = `You rolled a ${diceResult}!`; // Display the result in the HTML element with id 'diceResult'
    return diceResult; // Return the result for further use if needed
}

//lets enhance it to roll three dice and display the results

function rollThreeDice() {
    const diceResults = []; // Initialize an array to store the results of the three dice rolls
    for (let i = 0; i < 3; i++) { // Loop three times to roll three dice
        const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        diceResults.push(result); // Add the result to the array
    }
    document.getElementById('result').textContent = `You rolled: ${diceResults.join(', ')}!`; // Display the results in the HTML element with id 'diceResult'
    return diceResults; // Return the results for further use if needed
}