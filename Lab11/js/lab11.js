// Lab 11: JavaScript Events and Forms
// Author: Corey Haro
// Date: 11/17/23
// code credit to Wes Modes

// Sorts the charchters of a string in alphabetical order. 
function sortString(inputString) {
    // string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit-name").click(function () {
    //get value of input 
    const userName = $("#user-name").val();
    //sorting
    userNameSorted = sortString(userName);
    //aappend a new div to our output div
    $("#output").append('<div class="text"><p> Your Name:' + userNameSorted + '</p></div>');
});



$("#submit-color").click(function () {
    const userColor = $("#fav-color").val();
    $("#output").append('<div class="color"><p> Your favorite color: ' + userColor + '</p></div>');

});


$("#submit-birth").click(function () {
    const userBirthDay = $("#birth-day").val();
    $("#output").append('<div class="date"><p> Your birthday: ' + userBirthDay + '</p></div>');

});


$("#submit-number").click(function () {
    const userNumber = $("#fav-number").val();
    $("#output").append('<div class="number"><p> Your favorite number: ' + userNumber + '</p></div>');

});

