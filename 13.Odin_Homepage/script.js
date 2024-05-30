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
  setTimeout(hidePreloader, 10); // Hide the preloader after 2 seconds
});

// Function to add event listeners to multiple elements
function addEventOnElements(elements, event, callback) {
  // console.log(addEventOnElements);
  if (elements instanceof NodeList) {
    elements = Array.from(elements);
  } else if (!Array.isArray(elements)) {
    // If 'elements' is not an array, convert it into an array
    elements = [elements];
  }
  elements.forEach((element) => {
    console.log(element);
    console.log("Adding event listener to:", element); // Log the element
    console.log("Event:", event); // Log the event
    console.log("Callback function:", callback);
    element.addEventListener(event, callback);
  });
}

const tiltElements = document.querySelectorAll("[data-tilt]");
// console.log(tiltElements);
const initTilt = function (event) {
  //get tilt element center position
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${
    tiltPosY - tiltPosY * 2
  }deg)`;
};

addEventOnElements(tiltElements, "mousemove", function (event) {
  initTilt.call(this, event);
});

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 90,
  backSpeed: 70,
  backDelay: 500,
  loop: true,
});

// Scroll Reveal

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-text, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.skills-container,.services-content,.slider-list,.contact-container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home p, .about-text", { origin: "right" });

// Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyuBMO8rRCITgGb3UQKdvvOngLpk0VBfNDKAQ-754pH4u7abEEnR6TEA8LuxhVwxnvwPg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// CUSTOM CURSOR

const cursors = document.querySelectorAll("[data-cursor]");

const hoveredElements = [
  ...document.querySelectorAll("button"),
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll("hoe"),
];

window.addEventListener("mousemove", function (event) {
  const posX = event.clientX;
  const posY = event.clientY;

  // cursor dot position
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  // cursor outline position
  this.setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);
});

// add hovered class when mouseover on hoverElements

addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

// remove hovered class when mouseout on hoverElements

addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});
