// randomImageLibrary.js
document.addEventListener("DOMContentLoaded", function () {
    // Array of image URLs
    const imageUrls = [
        "bananaslug1.png",
        "bananaslug2.png",
        "bananaslug3.png",
        "bananaslug4.png",
        "bananaslug5.png",
        "bananaslug6.png",
        "bananaslug7.png",
        "bananaslug8.png",
        
        // Add more image URLs as needed
    ];

    // Function to get a random index from the array
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // Function to display a random image
    function displayRandomImage() {
        const randomIndex = getRandomIndex(imageUrls);
        const randomImageUrl = imageUrls[randomIndex];
        const imgElement = document.getElementById("randomImage");
        imgElement.src = randomImageUrl;
    }

    // Call the function to display a random image when the page loads
    displayRandomImage();
});
