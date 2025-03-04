// Function to perform addition
function addition() {
    var simple_Math = 20 + 8;
    document.getElementById("Math").innerHTML = "20 + 8 = " + simple_Math;
}

// Function to perform subtraction
function subtraction() {
    var simple_Math = 20 - 8;
    document.getElementById("Math1").innerHTML = "20 - 8 = " + simple_Math;
}

// Function to perform division
function division() {
    var simple_Math = 20 / 8;
    document.getElementById("Math2").innerHTML = "20 / 8 = " + simple_Math;
}

// Function to perform multiplication
function multiplication() {
    var simple_Math = 20 * 8;
    document.getElementById("Math3").innerHTML = "20 * 8 = " + simple_Math;
}

// Function to perform multiple math operations
function more_Math() {
    var simple_Math = (28+2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "28 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// Function to perform modulus (remainder)
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Function to perform negation
function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

// Function to perform increment
function increment() {
var x = 5;
x++; // Increases number by 1
document.getElementById("Math7").innerHTML = x;
}

// Function to perform decrement
function decrement() {
var y = 5.28;
y--; // Decreases number by 1
document.getElementById("Math8").innerHTML = y;
}

// Function to perform an alert with a random number
window.alert(Math.random() * 100);

// Function to generate a random number between 1 and 100
function displayMathResult() {
    var Random = Math.floor(Math.random() *100) +1;   //Math.floor rounds it down and +1 ensures a range between 1 - 100
    document.getElementById("random").innerHTML = "Random number (1-100):" + Random;
}