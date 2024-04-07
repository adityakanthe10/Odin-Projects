// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let footerbtn = document.querySelector("btn");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
// Function to hide the preloader
function hidePreloader() {
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none"; // Hide the preloader
}

// Show the preloader when the page starts loading
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(hidePreloader, 1000); // Hide the preloader after 2 seconds
});
