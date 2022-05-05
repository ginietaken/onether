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

// Services
window.onscroll = function (e) {
  let constantY = 700;
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  let sidebars = document.getElementsByClassName("sidebar");
  if (scrollTop > constantY) {
    sidebars[0].classList.add("sticky-panel");
  } else {
    sidebars[0].classList.remove("sticky-panel");
  }

  //console.log(window.pageYOffset || (document.documentElement || document.body.parentNode ||document.body).scrollTop);
};
