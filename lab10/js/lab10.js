// index.js - Lab 10: Javascript for the Web
// Author: Corey Haro
// Date: 11/15/23 


function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //Genorate the random lorem ipsum- like text 
    return text. slice(randStart, randStart + randLen);
}

//clicker listener for button
$("#make-convo").click(function(){
    // Get new fake dialogue
    const newText = generateRandomText();

    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div');
});

