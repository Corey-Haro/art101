// index.js- Lab 8: Anon Functions & Callbacks
// Author: Corey Haro
// Date: 11/13/23

// Using document.ready to make sure code runs after website loads 
$(".challange").append("<button class='lavender-button'>Click Me</button>");
$(".problems").append("<button class='darkgreen-button'>Click Me</button>");
$(".reflection").append("<button class='pink-button'>Click Me</button>");
$(".results").append("<button class='aqua-button'>Click Me</button>");
$(".java-script-output").append("<button class='red-button'>Click Me</button>");

//Color changing button for challamge section
$(".lavender-button").click(function(){
    $(".challange").toggleClass("challangespecial");
})

//Color changing button for the problems section 
$(".darkgree-button").click(function(){
    $(".problems").toggleClass("problemspecial");
})

//Color changing button for the refelction section 
$(".pink-button").click(function(){
    $(".reflection").toggleClass("reflectionspecial");
})

//Color changing button for the results section 
$(".aqua-button").click(function(){
    $(".results").toggleClass("resultsspecial");
})

//Color changing button for the java script output section 
$(".red-button").click(function(){
    $(".java-script-output").toggleClass("javascriptoutputspecial");
})