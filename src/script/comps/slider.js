// Select elements and store in variables for better performance
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const navLinks = document.querySelectorAll(".nav-item");

// Add click event listeners for navigation links
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    slidesContainer.scrollLeft = slide.clientWidth * index;
    changeActiveLink(link);
  });
});

// Add scroll event listener for slides container to change active link
slidesContainer.addEventListener("scroll", () => {
  const currentSlide = Math.floor(slidesContainer.scrollLeft / slide.clientWidth);
  changeActiveLink(navLinks[currentSlide]);
});

// Add swipe event listener for slides container to change active link
slidesContainer.addEventListener("swiped-right", () => {
  const currentSlide = Math.floor(slidesContainer.scrollLeft / slide.clientWidth);
  changeActiveLink(navLinks[currentSlide]);
});

// Function to change active link class
function changeActiveLink(activeLink) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  activeLink.classList.add("active");
}

// Set initial active link after 4 seconds
setTimeout(() => {
  changeActiveLink(navLinks[0]);
}, 4000);
