//lets show how to use variables within a webpage

//variables

let age = 25;
let price = 109.99;
let gpa = 3.4;
let fullName = "Kevin Omondi"; 
let isOnline = true;
let isAdmin = false;


document.getElementById("p1").textContent = `You are ${age} years old`;
document.getElementById("p2").textContent = `The price is $${price}`;
document.getElementById("p3").textContent = `Your GPA is ${gpa}`;
document.getElementById("p4").textContent = `My name is ${fullName}`;
document.getElementById("p5").textContent = `Is the user online? ${isOnline}`;
document.getElementById("p6").textContent = `Is the user an admin? ${isAdmin}`;