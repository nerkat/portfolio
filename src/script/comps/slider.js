const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const aboutLink = document.querySelector("#nav-link-about");
const resumeLink = document.querySelector("#nav-link-resume");
const galleryLink = document.querySelector("#nav-link-gallery");
const certificatesLink = document.querySelector("#nav-link-certificates");


aboutLink.addEventListener("click", () => {
  changeActiveLink(aboutLink);
  slidesContainer.scrollLeft = 0;
});

resumeLink.addEventListener("click", () => {
  changeActiveLink(resumeLink);
  slidesContainer.scrollLeft = slide.clientWidth;
});

galleryLink.addEventListener("click", () => {
  changeActiveLink(galleryLink);
  slidesContainer.scrollLeft = slide.clientWidth * 2;
});

certificatesLink.addEventListener("click", () => {
  changeActiveLink(certificatesLink);
  slidesContainer.scrollLeft = slide.clientWidth * 3;
});

changeActiveLink = (activeLink) => {
  const links = document.querySelectorAll(".nav-item");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  activeLink.classList.add("active");
};

setTimeout(() => {
  changeActiveLink(aboutLink);
}, 4000);