// toggle menu
const navToggler = document.querySelector(".toggle");
const nav = document.querySelector(".main-nav");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("active");
  nav.classList.toggle("active");
});
