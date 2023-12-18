// DOM - Document Object Model

// spread syntax(...) - The spread(...) syntax allows an iterable ,such as array or string ,to be exoanded in places where zero or more arguments (for function calls ) or elements (for array literals) are expected .
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says "Hey I'm red!"

const red = document.createElement("p");
red.classList.add("red-text");
red.textContent = "Hey! I'm red!";
red.style.color = "red";
container.appendChild(red);

// a h3 with blue text that says "i'm blue h3!"
const header = document.createElement("h3");
header.classList.add("header-text");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

//  a <div> with a black border and pink background color with the following elements inide of it :
// 1. another <h1> that says "i'm in a div"
// 2.a <p> that says "ME TOO!"
// 3.Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const content2 = document.createElement("div");
content2.setAttribute("style", "background:pink;border:black");
const header1 = document.createElement("h1");
header1.classList.add("header-text");
header1.textContent = "I'm in a div";
const para2 = document.createElement("p");
para2.classList.add("para2-text");
para2.textContent = "ME TOO!";
content2.appendChild(header1);
content2.appendChild(para2);
container.appendChild(content2);
