//there are two ways to accept user inputs in JavaScript.
// One is through the prompt() function, 
// and the other is through HTML form elements. 
// In this example, we will use the prompt() function to accept user input.

// The prompt() function displays a dialog box that prompts the user for input.
// It takes an optional string argument that is displayed as a message in the dialog box.

// let userInput = prompt("Please enter your name:");

// The value entered by the user is stored in the variable 'userInput'.
// We can then use this variable to display a greeting message.

// alert("Hello, " + userInput + "! Welcome to JavaScript programming!");

// Note: The prompt() function will return null if the user clicks "Cancel" or closes the dialog box. 
// You may want to handle this case in your code to avoid unexpected behavior.

// if (userInput !== null) {
//     alert("Hello, " + userInput + "! Welcome to JavaScript programming!");
// } else {
//     alert("No name entered. Please try again.");
// }

//now lets see how to accept user inputs through HTML form elements.
// We can create an HTML form with an input field and a button to accept user input.

// In the HTML file, we can add the following code:

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accepting User Inputs</title>
</head>
<body>
    <h1>Enter Your Name</h1>
    <input type="text" id="nameInput" placeholder="Your name here">
    <button onclick="greetUser()">Greet Me</button>

    <script src="004.accepting-user-inputs.js"></script>
</body>
</html>
*/

// In the JavaScript file (004.accepting-user-inputs.js), we can add the following code to handle the button click event and display a greeting message:

function greetUser() {
    let nameInput = document.getElementById("nameInput").value; // Get the value from the input field
    if (nameInput) {
        document.getElementById("greeting").textContent = "Hello, " + nameInput + "! Welcome to JavaScript programming!";
    } else {
        document.getElementById("greeting").textContent = "Please enter your name.";
    }
}



// In this code, we define a function called greetUser() that is called when the button is clicked. 
// The function retrieves the value entered in the input field using document.getElementById() and checks if it is not empty. 
// If a name is entered, it displays a greeting message; otherwise, it prompts the user to enter their name.