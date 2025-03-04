//Ternary Operators Challenge
function voting() {
    var age = document.getElementById("age").value;
    var message = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";
    document.getElementById("result").innerHTML = message;
}

//Coding Assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


//New Keyword Assignment

// Constructor function 
function Person(Name, Age, City, Hobby) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_City = City;
    this.Person_Hobby = Hobby;
}

// Creating new objects
var Alex = new Person("Alex", 28, "New York", "Dancing");
var Julian = new Person("Julian", 35, "Los Angeles", "Swimming");
var David = new Person("David", 40, "Chicago", "Singing");

// Function to display Alex's details
function displayPerson() {
    document.getElementById("Person_Info").innerHTML = 
    Alex.Person_Name + " is " + Alex.Person_Age + " years old, lives in " + 
    Alex.Person_City + ", and enjoys " + Alex.Person_Hobby + ".";
}

//Nested Functions Assignment

function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = nested();
    function nested() {
        return "A nested function right here!"
    }
}