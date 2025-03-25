function getReceipt() {
    // This initializes a string to store the receipt details.
    var text1 = "<h3>You Ordered:</h3>";
    
    // Initializes the total price of the order.
    var runningTotal = 0;
    var sizeTotal = 0;

    // Get all elements with the class "size" (radio buttons for pizza size)
    var sizeArray = document.getElementsByClassName("size");

    // Loop through the size options to find which one is selected.
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; // Get the selected size
            text1 = text1 + selectedSize + "<br>"; // Append selected size to receipt
        }
    }

    // Assign price based on the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Update the running total with the size price
    runningTotal = sizeTotal;

    // Console logs for debugging
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    // Call getTopping function, passing the running total and text1 (receipt)
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0; // Initialize topping cost
    var selectedTopping = []; // Array to store selected toppings

    // Get all elements with the class "toppings" (checkboxes for toppings)
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through the toppings and find the checked ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // Add topping to the array
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"; // Append topping to receipt
        }
    }

    // Count the number of selected toppings
    var toppingCount = selectedTopping.length;

    // First topping is free, additional toppings cost $1 each
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // Charge for additional toppings
    } else {
        toppingTotal = 0; // No charge if only one topping is selected
    }

    // Update the running total with topping costs
    runningTotal = (runningTotal + toppingTotal);

    // Console logs for debugging
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

    // Display the order summary and total price on the webpage
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
}
