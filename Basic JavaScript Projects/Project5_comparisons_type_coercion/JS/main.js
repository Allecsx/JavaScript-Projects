//Data type * type coercion
function dataType() {
    var num = "Word";
    var str = 28;
    document.write("The data type of my variable is:" + typeof str); //Return 'number'
}


function typeCoercion() {
    var str = "Sunny";
    var num = 28;

    var result = str + num;
    document.write("My type coercion is:" + result); //Return a string + number
}


// Display NaN by performing an invalid math operation
document.write("Example of NaN: " + (0 / 0) + "<br>");

//Used isNaN() to check if a value is "true"
document.write("Is 'Hello' NaN? " + isNaN("Hello") + "<br>");

//Used isNaN() to check if a value is a number
document.write("Is 100 NaN? " + isNaN(100) +"<br>");


//Ifinity & -Infinity Assignment
function displayInfinity() {
    document.getElementById("infinity").innerHTML = "Example: " + (1.8e308);
}

function NegativeInfinity() {
    document.getElementById("negativeInfinity").innerHTML = " Example: " + (-1.8e308);
}


//Boolean Assignment
function displayTrue() {
    document.getElementById("trueResult").innerHTML = "10 > 5 is: " + (10 > 5);
}

function displayFalse() {
    document.getElementById("falseResult").innerHTML = "3 < 2 is: " + (3 < 2);
}

//console.log() Assignment
console.log(2+2);
console.log(15<8);

//Double Equal Signs Assignment
function EqualsTrue() {
    document.getElementById("true").innerHTML = "5 == 5 is: " + (5 == 5); 
}

function EqualsFalse() {
    document.getElementById("false").innerHTML = "10 == 5 is: " + (10 == 5);
}


//Triple Equal Signs Assignment
function True() {
    document.getElementById("true1").innerHTML = "5 === 5 is: " + (5 === 5); //Same type & value
}

function False1() {
    document.getElementById("false1").innerHTML = '"5" === 10 is: ' + ("5" === 10); // Different type & value
}

function False2() {
    document.getElementById("false2").innerHTML = '"5" === 5 is: ' + ("5" === 5); // Different type, same value
}

function False3() {
    document.getElementById("false3").innerHTML = "5 === 10 is: " + (5 === 10); // Same type, different value
}


//AND & OR Assignment
function ANDTrue() {
    document.getElementById("andTrue").innerHTML = "(5 > 2 && 10 > 5) is: " + (5 > 2 && 10 > 5); //Returns True -AND
}

function ANDFalse() {
    document.getElementById("andFalse").innerHTML = "(5 > 10 && 10 > 5) is: " + (5 > 10 && 10 > 5); //Returns False -AND
}

function ORTrue() {
    document.getElementById("orTrue").innerHTML = "(5 > 10 || 10 > 5) is: " + (5 > 10 || 10 > 5); //Returns True -OR
}

function ORFalse() {
    document.getElementById("orFalse").innerHTML = "(5 > 10 || 3 > 7) is: " + (5 > 10 || 3 > 7); //Returns False -OR
}


//NOT Operator Assignment
function not_Function() {
    document.getElementById("Not").innerHTML = ! (20>10); //Return false
}

function not1_Function() {
    document.getElementById("Not1").innerHTML = ! (5>10); //Return true
}