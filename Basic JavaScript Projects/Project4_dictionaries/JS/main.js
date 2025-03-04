//Function to display dictionary value
function displayDictionary() {
    var phone ={
        brand: "Samsung",
        model: "S25 Ultra",
        year: "2025",
        color: "Titanium Black",
        memory: 512
    };
    document.getElementById("Dictionary").innerHTML = "The phone color is " + phone.color;
}


//Function to test a duplicate key
function duplicateKeysTest() {
    var phone1 ={
        brand: "Samsung",
        model: "S25 Ultra",
        year: "2025",
        model: "S24 Ultra",
        memory: 512
    };
    document.getElementById("Dictionary1").innerHTML = "The phone model is " + phone1.model;
}

//Function to delete a key
function My_Dictionary() {
    var Animal ={
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //delete the Sound key from the dictionary
    document.getElementById("Dictionary2").innerHTML = Animal.Sound;
}
