// index.js - exparamentation 
// Author: Corey Haro
// Date: 11/15/23

console.log("Javascrip is working")
$("#my-button").click(function(){
    // console.log("button clicked!");
    var name = $("#input").val()

    console.log("prompt returned:" + name);

    newText = "Hello" + name + "!";
    $("#tittle").html(newText);
})

