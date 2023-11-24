// Lab 12: Conditionals
// Author: Corey Haro
// Coding Credit: Wes Modes & Piscella Dolang
// Date: 11/23/23


// Array of the discription for each of the houses 
descriptionArray =[
    "A Gryffindor values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
    ,"A Ravenclaw values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw."
    ,"A Slytherin values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones."
    ,"A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
]

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff 
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    // Conditionals for sorting requirements
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

// Getting the value of user input and running it through sortingHat()
// Click listener for the button
$("#button").click(function() {
    var name = $("#input").val();
    // Storing input into a variable 
    var house = sortingHat(name);
    // Function where it returns the description that corresponds with the appropriate house 
    function descriptors(x) {
        if (x == "Gryffindor") {
            return descriptionArray[0] 
        }
        else if (x == "Ravenclaw") {
            return descriptionArray[1]
        }
        else if (x == "Slytherin") {
            return descriptionArray[2]
        }
        else if (x == "Hufflepuff") {
            return descriptionArray[3]
        }
    }
    // Storing the function's result into a variable 
    var des = descriptors(house);
    // Text includes both house and descriptor 
    newText = "<h3>The Sorting Hat has sorted you into " + house + " !</h3></br>" + des;
    $("#output").html(newText);
})
