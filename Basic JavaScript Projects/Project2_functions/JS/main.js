function myFunction() {
    var sentence = "I am  learning";  //creating variable
    sentence += " a lot from this book!";  //using += operator for adding it to variable
    
    document.getElementById("Concatenate").innerHTML = sentence; //using  document.getElementById()
}


function displayMessage() {
    var part1 = "This book is"; //creating variable
    var part2 = " awesome!"; //creating a 2nd variable
    
    var A = part1 + part2; //concatenating the two strings
    
    document.getElementById("message").innerHTML = A; //using  document.getElementById
    }
    