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
$("#submit").click(function(){


//get value of input 
const userName = $("#user-name").val();
 userNameSorted = sortString(userName);

//aappend a new div to our output div
$("#output").html('<div class="text">' + userNameSorted + '</p></div>');
})


