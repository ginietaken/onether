const selectElement = (element) => document.querySelector(element);

const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".toggle");
const navLink = document.querySelector(".nav-link");

navToggle.textContent = `O Menu`;

selectElement(".hamburger").addEventListener("click", () => {
  selectElement(".hamburger").classList.toggle("active");
  navList.classList.toggle("active");

  if (navList.classList.contains("active")) {
    navToggle.textContent = "X Menu";
    navToggle.style.color = "#7878a3";
  } else {
    navToggle.textContent = "O Menu";
    navToggle.style.color = "#ffffff";
  }
});
