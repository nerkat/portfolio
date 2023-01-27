// code that handles zooming of images
// on '.gallery div' click, get the image src and copy it - with fixes positioning to the original image position and size

const gallery = document.querySelectorAll(".gallery");
const zoom = document.querySelector(".zoom");
const zoomImg = document.querySelector(".zoom img");
const zoomPrev = document.querySelector(".zoom .zoom-prev");
const zoomNext = document.querySelector(".zoom .zoom-next");
const zoomClose = document.querySelector(".zoom .zoom-close");
var zoomState;
var images;

gallery.forEach((gallery) => {
  gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      zoomState = e.target.classList.contains("projects") ? "projects" : "certificates";
      images = e.target.closest('.gallery').querySelectorAll("img.hidden");
      zoomImg.src = e.target.parentElement.querySelector("img.hidden").src;
      zoomImg.style.top = e.target.y + "px";
      zoomImg.style.left = e.target.x + "px";
      zoomImg.style.width = e.target.clientWidth + "px";
      zoomImg.style.height = e.target.clientHeight + "px";
      zoom.classList.add("active");
      setTimeout(() => {
        zoom.classList.add("zoom-in");
      }, 200);
    }

  });
});

zoomClose.addEventListener("click", () => {
  zoom.classList.remove("active");
  zoom.classList.remove("zoom-in");
});

zoomNext.addEventListener("click", () => {
  next();
});


zoomPrev.addEventListener("click", () => {
  prev();
});

next = function () {
  let nextImg = zoomImg.src;
  images.forEach((img, index) => {
    if (img.src === zoomImg.src) {
      nextImg = images[index + 1] ? images[index + 1].src : images[0].src;
    }
  });
  zoomImg.src = nextImg;
}

prev = function () {
  let prevImg = zoomImg.src;
  images.forEach((img, index) => {
    if (img.src === zoomImg.src) {
      prevImg = images[index - 1] ? images[index - 1].src : images[images.length - 1].src;
    }
  });
  zoomImg.src = prevImg;
}

let touchstartX = 0
let touchendX = 0

checkDirection = function () {
  if (touchendX < touchstartX) { next(); }
  if (touchendX > touchstartX) { prev(); }
}

zoom.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

zoom.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})
