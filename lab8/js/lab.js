// index.js- Lab 8: Anon Functions & Callbacks
// Author: Corey Haro
// Date: 11/5/23


// Creating Addition Function
// General Code Outline for entire document credited to: 
// Wes Modes- Canvas Page Lab 8

function multiplication(x){
    var results = 5 * x
    return results;

}

// Testing Addition Function 
console.log("What is 3 * 5? ", multiplication(3));
console.log("What is 10 * 5", multiplication(10));

//Create an array with integers
numberArray = [-17, 24, 42, -36, 18, 4]
console.log("My array ",  numberArray);

var result = numberArray.map(multiplication)
// should return [-85, 120, 84, -180, 90, 20]
console.log("Testing Multiplication: ", result);

var result = numberArray.map(function(subtract){
    return subtract - 7;
})

// Should return [-92, 113, 77, -187, 83, 13]
console.log ("Subtracting 7 from array: ", result);