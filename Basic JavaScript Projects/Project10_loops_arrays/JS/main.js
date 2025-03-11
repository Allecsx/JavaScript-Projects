// Initialize counter
let count = 0;

// While loop that counts from 0 to 5
let result = "";
while (count <= 5) {
    result += "Count:" + count + "<br>";
    count++;
}
// Display result in the HTML element
document.getElementById("Loop").innerHTML = result;


//Length property assignment
let text = "Hello, World!";
let length = text.length; // Use the length property
document.getElementById("text").innerHTML = "The length of the string is: " + text.length;

//forLoop assignment
var Instruments = ["Guitar", "Drums", "Piano","Bass", "Violin", "Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() { // Loop through each element
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>"; // a line break to Content
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and Objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML ="In this picture, the cat is " + Cat_Picture[2] + ".";
}

// Function to handle array and display values
function array_Function() {
    // Create an array
    let myArray = ["Apple", "Banana", "Cherry", "Blueberry", "Elderberry"];
    
    // Convert the array to a string and display it in the HTML element
    document.getElementById("Array").innerHTML = "Array Values: " + myArray;
}

//Const Keyword Assignment
const phone = {  // Create an object using const
    brand: "Samsung",
    model: "S25 Ultra",
    storage: "128GB"
};

// Function to display the phone object properties
function constant_function() {

// Modify the object
phone.storage = "512GB"; // Changed a property value
phone.color = "Titanium Black"; // New property

// Display updated values in the HTML
document.getElementById("Constant").innerHTML = 
    "Updated Phone: " + phone.brand + " " + phone.model + ", Storage: " + phone.storage + ", Color: " + phone.color;

}

//Let Keyword Assignment
function let_Function() {
    let letmessage = "Hello, this is a block scope variable!";
    document.getElementById("letmessage").innerHTML = letmessage;
}

// Return Statement Challenge
function returnNum(a, b) {
    return a + b; // Returns the sum of a and b
}
// Function to display the returned value in the HTML
function returnSum() {
    let sum = returnNum(15, 13); // Calls the function with 15 and 13
    document.getElementById("return").innerHTML = "The sum is: " + sum;
}

// Create a iphone object using let
let iphone = {
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    storage: "1TB",
    color: "Skyblue",
    
    // Method to return phone details
    getDetails: function() {
        return "Phone: " + this.brand + " " + this.model + ", Storage: " + this.storage + ", Color: " + this.color;
    }
};

// Function to display the phone details in HTML
function displayiPhone() {
    document.getElementById("iphone").innerHTML = iphone.getDetails();
}

//Break and Continue Challenge
function breakAndContinue() {
    let text = "";
    
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            text += "Skipping number 5 (continue)<br>";
            continue; // Skips the rest of the code for this iteration and moves to the next one
        }
        if (i === 8) {
            text += "Stopping at number 8 (break)<br>";
            break; // Stops the loop completely
        }
            text += "Number: " + i + "<br>";
    }
    document.getElementById("breakContinue").innerHTML = text;
}

