//Local and Global Variable Assignment
var global = "I am a global variable!";

function checkScope() {
    var local = "I am a local variable!";
    
    document.getElementById("scope").innerHTML = global + " " + local;
}

// Function with an intentional error
function errorFunction() {
    console.log("This is before the error.");
    
    // Intentional error:  is not defined
    console.log(Error1);
    
    console.log("This will not execute due to the error above.");
}

//Method Assignment
function TimeMessage() {
    var currentHour = new Date().getHours(); // Get the current hour
    var message;

    if (currentHour < 12) {
        message = "Good morning!"; //Print "Good morning!" if current hour is < 12;
    } 
    else if (currentHour < 18) {
        message = "Good afternoon!"; //Print "Good afternoon!" if current hour is < 18;
    } 
    else {
        message = "Good evening!"; //Print "Good evening!" if current hour is > 18;
    }

    document.getElementById("timeMessage").innerHTML = message;
}

//If Statement Assignment
function ownifstatment() {
    var num = 29; //Defined number

    if (num > 28) { //my own if statement
        document.getElementById("result").innerHTML = "My define number is greater than 28!";
        }
    }

//Else Assignment    
function checkNumber() {
    var number = document.getElementById("userInput").value;
    if (number > 10) {
        document.getElementById("result1").innerHTML = "The number is higher than 10";
    }
    else {
        document.getElementById("result1").innerHTML = "The number is 10 or less"; //else statement
    }
}

//Else if Assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}