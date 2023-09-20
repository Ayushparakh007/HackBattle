<<<<<<< HEAD
const scrollerLeft = document.querySelector(".scroller-left");
const scrollerRight = document.querySelector(".scroller-right");
const testimonialParent = document.querySelector(".testimonials-parent");
const testimonialContainers = document.querySelectorAll(
  ".testimonial-container"
);
let scroll = 0;

scrollerRight.addEventListener("click", () => {
  if (scroll == testimonialContainers.length - 1) {
    scroll = -1;
  }
  scroll++;
  testimonialParent.style.transform = `translateX(${-100 * scroll}vw)`;
});
scrollerLeft.addEventListener("click", () => {
  if (scroll == 0) {
    scroll = testimonialContainers.length;
  }
  scroll--;
  testimonialParent.style.transform = `translateX(${-100 * scroll}vw)`;
});
=======
const scrollerLeft = document.querySelector(".scroller-left");
const scrollerRight = document.querySelector(".scroller-right");
const testimonialParent = document.querySelector(".testimonials-parent");
const testimonialContainers = document.querySelectorAll(
  ".testimonial-container"
);
let scroll = 0;

scrollerRight.addEventListener("click", () => {
  if (scroll == testimonialContainers.length - 1) {
    scroll = -1;
  }
  scroll++;
  testimonialParent.style.transform = `translateX(${-100 * scroll}vw)`;
});
scrollerLeft.addEventListener("click", () => {
  if (scroll == 0) {
    scroll = testimonialContainers.length;
  }
  scroll--;
  testimonialParent.style.transform = `translateX(${-100 * scroll}vw)`;
});
>>>>>>> 82b9bf548bc9da745cdbe96ecb7824f88269231f
