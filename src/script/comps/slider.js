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

slidesContainer.addEventListener("scroll", () => {
  if (slidesContainer.scrollLeft === 0) {
    changeActiveLink(aboutLink);
  } else if (slidesContainer.scrollLeft >= slide.clientWidth * 3) {
    changeActiveLink(certificatesLink);
  } else if (slidesContainer.scrollLeft >= slide.clientWidth * 2) {
    changeActiveLink(galleryLink);
  } else {
    changeActiveLink(resumeLink);
  }
});

slidesContainer.addEventListener("swiped-right", () => {
  if (slidesContainer.scrollLeft === 0) {
    changeActiveLink(aboutLink);
  } else if (slidesContainer.scrollLeft >= slide.clientWidth * 3) {
    changeActiveLink(certificatesLink);
  } else if (slidesContainer.scrollLeft >= slide.clientWidth * 2) {
    changeActiveLink(galleryLink);
  } else {
    changeActiveLink(resumeLink);
  }
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