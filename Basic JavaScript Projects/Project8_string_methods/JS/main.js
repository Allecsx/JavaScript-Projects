//concat() Method Assignment
function concateStrings() {
    var part1 = "Hello, ";
    var part2 = "how are you?";
    var fullSentence = part1.concat(part2);
    document.getElementById("concatenate").innerHTML = fullSentence;
}

//slice() Method Assignment
function sliceMethod() {
    var sentence = "JavaScript is a powerful programming language.";
    var section = sentence.slice(1, 44); // Extracts "avaScript is a powerful programming languag"
    document.getElementById("sliceText").innerHTML = section;
}

function convertToUpperCase() { //define the toUpperCase() 
    var text = "hello, world!";
    var upperText = text.toUpperCase(); // Converts to "HELLO, WORLD!"
    document.getElementById("upperCaseText").innerHTML = upperText;
}

function searchMethod() { //define the search()
    var sentence = "JavaScript is a powerful language.";
    var position = sentence.search("powerful"); // Returns the index of "powerful"
    document.getElementById("searchResult").innerHTML = "Position: " + position;
}

function string_Method() { //define toString()
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML= x.toString();
}

function precision_Method() {  //define toPrecision() 
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Method() { //define toFixed()
    var x = 28.648;
    document.getElementById("Fixed").innerHTML = x.toFixed(0);
}

function value_Method() { //define valueOf()
    var x = 123;
    document.getElementById("Value").innerHTML = x.valueOf();
}