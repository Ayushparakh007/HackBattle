<<<<<<< HEAD
const navIcon = document.querySelector(".nav-icon");
const header = document.querySelector("header");

let closed = false;
navIcon.addEventListener("click", () => {
  if (closed) {
    navIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    closed = false;
  } else {
    navIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closed = true;
  }
  header.classList.toggle("show");
});
=======
const navIcon = document.querySelector(".nav-icon");
const header = document.querySelector("header");

let closed = false;
navIcon.addEventListener("click", () => {
  if (closed) {
    navIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    closed = false;
  } else {
    navIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closed = true;
  }
  header.classList.toggle("show");
});
>>>>>>> 82b9bf548bc9da745cdbe96ecb7824f88269231f
