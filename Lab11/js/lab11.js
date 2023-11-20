// Lab 11: JavaScript Events and Forms
// Author: Corey Haro
// Date: 11/17/23
// code credit to Wes Modes

// Sorts the charchters of a string in alphabetical order. 
function sortString(inputString){
// we haev to convert our
// string to an array and back again to sort it
return inputString.split('').sort().join('');
}
// Click listener for button
$("#submit-name").click(function(){


//get value of input 
const userName = $("#user-name").val();
 userNameSorted = sortString(userName);

//aappend a new div to our output div
$("#output").html('<div class="text">' + userNameSorted + '</p></div>');
});

$("#submit-color").click(function(){
    const useColor = $("#fav-color").val();
    $("#output").append('<div class="color"><p> Your favorite color: ' + useColor + '</p></div>');

});


$("#submit-birth").click(function(){
    const useBirthDay = $("#birth-day").val();
    $("#output").append('<div class="date"><p> Your birthday: ' + useBirthDay + '</p></div>');

});


$("#submit-animal").click(function(){
    const useAnimal = $("#fav-animal").val();
    $("#output").append('<div class="animal"><p> Your favorite animal: ' + useAnimal + '</p></div>');

});
