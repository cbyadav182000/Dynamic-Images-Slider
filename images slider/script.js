// Initialize variables
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slides');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Function to update the slide position and scale
function updateSlides() {
    const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    sliderContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // Move slides

    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.transform = 'scale(1.2) translateY(-10%)';
            slide.style.opacity = '1';
        } else {
            slide.style.transform = 'scale(1)';
            slide.style.opacity = '0.6';
        }
    });
}

// Function to show the previous slide
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Calculate previous index
    updateSlides();
}

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Calculate next index
    updateSlides();
}

// Function to show the modal with the clicked image
function showModal(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'flex';
        modalImage.src = event.target.src;
    }
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', showPrevSlide);
document.querySelector('.next').addEventListener('click', showNextSlide);

// Event listeners for image clicks
slides.forEach(slide => {
    slide.addEventListener('click', showModal);
});

// Event listener for closing the modal
closeModal.addEventListener('click', hideModal);

// Event listener to close modal when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        hideModal();
    }
});

// Event listener to handle resizing
window.addEventListener('resize', updateSlides);

// Initialize the slider
updateSlides();
