// JavaScript to toggle the menu when clicking the hamburger icon
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
       menu.classList.toggle('show');
    });
});
//image gallery
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const imageGallery = document.getElementById("image-gallery");
    const imageWidth = imageGallery.scrollWidth / imageGallery.childElementCount; // Calculate the width of a single image

    // Function to handle previous button click
    prevButton.addEventListener("click", function () {
        imageGallery.scrollLeft -= imageWidth; // Scroll to the previous image
    });

    // Function to handle next button click
    nextButton.addEventListener("click", function () {
        imageGallery.scrollLeft += imageWidth; // Scroll to the next image
    });
});

var form = document.querySelector('form');
//newsletter form
form.onsubmit = function(e) {
  e.preventDefault();
}
