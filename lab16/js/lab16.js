// lab 16
// Nmae: Corey Haro 
// Date: 12/7/23
// Coding Credit: Priscella Dolang and Wes Modes 

//Display API data onto the website

function fetchComic() {
    // API link with the current comic
    const url = "https://xkcd.com/info.0.json";

    // AJAX method we learned in prev lab
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        // If data retrival is successful
        success: function(comicData) {
            const title = comicData.title;
            const imageUrl = comicData.img;
            const altText = comicData.alt;

            const comicDisplay = $("#comic-display");

            comicDisplay.html(`<h2>${title}</h2><br><img src="${imageUrl}" alt="${altText}"><p>${altText}</p>`);
        },
        // if data retrival is unsuccessful
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error fetching XKCD comic", textStatus, errorThrown);

        }
    });
}

$(document).ready(function() {
    fetchComic();
});