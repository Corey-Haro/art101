// sortUserName - a function that takes user input and sorts the latters
// of their name in random order
function sortUserName(){
    var userName = window.prompt (" Howdy! Please tell me your name so I can fix it");
    console.log("userName = ", userName) ;
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArrySort = ", nameArraySort);
    //join array back to string
    var nameSorted = nameArraySort.join('');
    return nameSorted;
}

//Output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");