const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const aboutLink = document.querySelector("#nav-link-about");
const resumeLink = document.querySelector("#nav-link-resume");
const galleryLink = document.querySelector("#nav-link-gallery");
const certificatesLink = document.querySelector("#nav-link-certificates");


aboutLink.addEventListener("click", () => {
  slidesContainer.scrollLeft = 0;
});

resumeLink.addEventListener("click", () => {
  slidesContainer.scrollLeft = slide.clientWidth;
});

galleryLink.addEventListener("click", () => {
  slidesContainer.scrollLeft = slide.clientWidth * 2;
});

certificatesLink.addEventListener("click", () => {
  slidesContainer.scrollLeft = slide.clientWidth * 3;
});