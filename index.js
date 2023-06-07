const image = document.getElementById("image1");
const images = [
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
]; // Array of image filenames
let currentIndex = 0;

function changeImage() {
  image.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length; // Loop through the array
}

// Set the interval to change the image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);

// Client Review functionality

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Function to show the next slide
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Start the slide show
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// contact me functionality
const hireMeBtn = document.getElementById("hire-me-btn");
const downloadCvBtn = document.getElementById("download-cv-btn");

function handleHireMeClick() {
  // Replace 'https://www.upwork.com' with your Upwork profile URL
  const upworkUrl = "https://www.upwork.com/freelancers/~01907dc187d3f2d6a3";
  window.open(upworkUrl, "_blank");
}

function handleDownloadCvClick() {
  // Replace 'cv.pdf' with the actual filename and path of your CV
  const cvUrl = "assets/sumbalCV.pdf";
  window.location.href = cvUrl;
}

hireMeBtn.addEventListener("click", handleHireMeClick);
downloadCvBtn.addEventListener("click", handleDownloadCvClick);

//Update the year dynamically
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
