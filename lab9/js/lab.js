// index.js- Lab 8: Anon Functions & Callbacks
// Author: Corey Haro
// Date: 11/13/23
$(document).ready(function () {
// Using document.ready to make sure code runs after website loads 
$(".challenge").append("<button class='lavender-button'>Click Me!</button>");
$(".problems").append("<button class='darkgreen-button'>Click Me!</button>");
$(".reflection").append("<button class='pink-button'>Click Me!</button>");
$(".results").append("<button class='aqua-button'>Click Me!</button>");
$(".java-script-output").append("<button class='red-button'>Click Me!</button>");

    //Color changing button for challamge section
    $(".lavender-button").click(function(){
        $(".challenge").toggleClass("challengespecial");
    })

    //Color changing button for the problems section 
    $(".darkgreen-button").click(function(){
        $(".problems").toggleClass("problemsspecial");
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

    // Bonus Task
    $("#content").prepend("<button class='bonus-button'>FUN THYME</button>");
        $("button").toggleClass("bonusbutton");
    
    
        $(".bonus-button").click(function () {
        $("button").toggleClass("bonusbutton");
        $(".lavender-button").toggleClass("bounsbutton");
        $(".darkgreen-button").toggleClass("bounsbutton");
        $(".pink-button").toggleClass("bounsbutton");
        $(".aqua-button").toggleClass("bounsbutton");
        $(".red-button").toggleClass("bounsbutton");

    })

})