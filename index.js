// get the hamburger menu button and the menu div
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar div");

// add event listener to the hamburger menu button
hamburger.addEventListener("click", () => {
  // toggle the 'active' class on the hamburger menu button
  hamburger.classList.toggle("active");
  // toggle the 'active' class on the menu div
  menu.classList.toggle("active");
});





let slideIndex = 0;
let slides = document.getElementsByClassName("slideshow-slide");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
});

document.querySelector(".next").addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
});
