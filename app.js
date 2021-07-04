const button = document.querySelector(".menu-btn");
const navlink = document.querySelector(".nav-links");

button.addEventListener("click", function () {
  navlink.classList.toggle("active");
  button.classList.toggle("open");
});
