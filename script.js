const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Set the initial slide to display
let slideIndex = 0;
carouselImages[slideIndex].parentElement.classList.add('active');

// Rotate the slides automatically
setInterval(() => {
    // Remove the active class from the current slide
    carouselImages[slideIndex].parentElement.classList.remove('active');

    // Increment the slide index
    slideIndex++;

    // Reset the slide index if it exceeds the number of slides
    if (slideIndex >= carouselImages.length) {
        slideIndex = 0;
    }

    // Add the active class to the new slide
    carouselImages[slideIndex].parentElement.classList.add('active');
}, 5000);
