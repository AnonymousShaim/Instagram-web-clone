// Array of image URLs
const imageUrls = [
    "screenshot1.png",
    "screenshot2.png",
    "screenshot3.png"
];

// Select the image element
const imageElement = document.getElementById("b");

// Counter to keep track of the current image
let currentIndex = 0;

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length; // Cycle through the array
    imageElement.src = imageUrls[currentIndex]; // Update the image src
}

// Change image every 3 seconds
setInterval(changeImage, 5000);
