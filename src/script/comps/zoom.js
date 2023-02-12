// Code that handles zooming of images
// On '.gallery div' click, get the image src and copy it with fixes positioning to the original image position and size
const gallery = document.querySelectorAll(".gallery");
const zoom = document.querySelector(".zoom");
const zoomImg = document.querySelector(".zoom img");
const zoomPrev = document.querySelector(".zoom .zoom-prev");
const zoomNext = document.querySelector(".zoom .zoom-next");
const zoomClose = document.querySelector(".zoom .zoom-close");
let zoomState;
let images;

// Handle zoom event on '.gallery div' click
gallery.forEach((gallery) => {
  gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      // Get the images for the current gallery
      images = e.target.closest('.gallery').querySelectorAll("img.hidden");

      // Get the image src
      zoomImg.src = e.target.parentElement.querySelector("img.hidden").src;

      // Show the zoom modal
      zoom.classList.add("active");
      zoom.classList.add("zoom-in");
    }
  });
});

// Handle close event
zoomClose.addEventListener("click", () => {
  zoom.classList.remove("active");
  zoom.classList.remove("zoom-in");
});

// Handle next event
zoomNext.addEventListener("click", () => {
  next();
});

// Handle previous event
zoomPrev.addEventListener("click", () => {
  prev();
});

// Get the next image
const next = function () {
  let nextImg = zoomImg.src;
  images.forEach((img, index) => {
    if (img.src === zoomImg.src) {
      nextImg = images[index + 1] ? images[index + 1].src : images[0].src;
    }
  });
  zoomImg.src = nextImg;
};

// Get the previous image
const prev = function () {
  let prevImg = zoomImg.src;
  images.forEach((img, index) => {
    if (img.src === zoomImg.src) {
      prevImg = images[index - 1] ? images[index - 1].src : images[images.length - 1].src;
    }
  });
  zoomImg.src = prevImg;
};
