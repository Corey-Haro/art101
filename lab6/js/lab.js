// index.js - purpose and description here
// Author: Corey Haro
// Date: 10/27/2023

// Define Variables
myTransport = ["Toyota Tundra", "BCycle Electric Bike", "Carpool", "Walking"]

// Object for my Dads Vehicle 
myMainRide = {
  make: "Toyota",
  model: "Tundra",
  color: "White", 
  year: 2016,
  age: function() {
    return 2023 - this.year; 
  }

}


// Output
document.writeln("Methods for My 1 Hour Commute to Campus: ", myTransport, "</br>")
// How to write n object into the document- code from canvas page (and help from cella) Lab 6 Wes Modes
document.writeln("My Dads Truck: <pre>",
    JSON.stringify(myMainRide, null,'\t'), "</pre>");

