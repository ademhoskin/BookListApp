"use strict";
const addBtn = document.getElementById("addBook");
const showBooksBtn = document.getElementById("showBooks");
const booksContainer = document.getElementById("booksContainer");

let myLibrary = [];

class Book {
  constructor(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
  }
}

addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const read = document.getElementById("readBoolean").checked;
  const newBook = new Book(title, author, genre, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
});
// create an eventlistener for the showBooksBtn that on click, will display the books in the myLibrary array in the bookList modal window
showBooksBtn.addEventListener("click", () => {
  let booksContainer = document.getElementById("booksContainer");

  for (i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.classList.add("bg-white", "p-2", "rounded", "shadow", "mb-2");

    const title = document.createElement("h3");
    title.classList.add("text-2xl", "font-bold");
    title.textContent = myLibrary[i].title;

    const author = document.createElement("p");
    author.classList.add("text-lg", "font-semibold");
    author.textContent = myLibrary[i].author;

    const genre = document.createElement("p");
    genre.classList.add("text-lg", "font-semibold");
    genre.textContent = myLibrary[i].genre;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(genre);

    booksContainer.appendChild(book);
  }
});
