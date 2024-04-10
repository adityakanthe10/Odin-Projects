let myLibrary = [];
// console.log(myLibrary);
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to load library data from local Storage
function loadLibraryFromStorage() {
  const libraryData = localStorage.getItem("library");
  if (libraryData) {
    myLibrary = JSON.parse(libraryData);
  }
}
// Function to save library data to local Storage

function saveLibraryToStorage() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

// Function to save library data to local Storage
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  saveLibraryToStorage(); //save library data to local Storage
  displayBooks(); // Update display after adding book
}

// Add book to library
function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.innerHTML = `
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <p>Pages: ${book.pages}</p>
  <p>Read: ${book.read ? "Yes" : "No"}</p>
  <button class = "remove-book" data-index="${index}">Remove</button>
  <button class = "toggle-read" data-index="${index}">Toogle Read Status</button>
  `;
    bookList.appendChild(bookDiv);
  });

  const removeButtons = document.querySelectorAll(".remove-book");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeBook(index);
    });
  });

  const toggleReadButtons = document.querySelectorAll(".toggle-read");
  toggleReadButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      toggleRead(index);
    });
  });
}
//   Function to remove books from the library and update local storage
function removeBook(index) {
  myLibrary.splice(index, 1);
  //   displayBooks();
  saveLibraryToStorage(); //save library data to local storage
  displayBooks();
}

// Function to toggle read status of a book and update local storage
function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  //   displayBooks();
  saveLibraryToStorage();
  displayBooks();
}

// Load Library data from local Storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadLibraryFromStorage();
  displayBooks();
  document.getElementById("new-book-btn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "block";
  });
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

  document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    document.getElementById("modal").style.display = "none";
  });
});

// Load library data from the local storage and display books when the page loads
window.addEventListener("load", () => {
  loadLibraryFromStorage();
  displayBooks();
});
// Manually adding some books to the library for demonstration
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("1984", "George Orwell", 328, true);
displayBooks();
