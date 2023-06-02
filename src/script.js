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
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let read = document.getElementById("readBoolean").checked;
  let newBook = new Book(title, author, genre, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  title = "";
  author = "";
  genre = "";
  read = false;
});
// create an eventlistener for the showBooksBtn that on click, will display the books in the myLibrary array in the bookList modal window
showBooksBtn.addEventListener("click", () => {
  while (booksContainer.firstChild) {
    booksContainer.firstChild.remove();
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.classList.add("bg-white", "p-2", "rounded", "shadow", "mb-2");

    const title = document.createElement("h3");
    title.classList.add("text-2xl", "font-bold", "text-black");
    title.textContent = myLibrary[i].title;

    const author = document.createElement("p");
    author.classList.add("text-lg", "font-semibold", "text-black");
    author.textContent = myLibrary[i].author;

    const genre = document.createElement("p");
    genre.classList.add("text-lg", "font-semibold", "text-black");
    genre.textContent = myLibrary[i].genre;

    const readLabel = document.createElement("label");
    readLabel.classList.add("text-lg", "font-semibold", "text-black");
    readLabel.textContent = "Read: ";

    const readCheckbox = document.createElement("input");
    readCheckbox.classList.add(
      "checkbox",
      "checkbox-sm",
      "mr-2",
      "border-black"
    );
    readCheckbox.type = "checkbox";
    readCheckbox.checked = myLibrary[i].read;
    readCheckbox.addEventListener("change", () => {
      myLibrary[i].read = readCheckbox.checked;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-error", "btn-sm", "ml-64");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      book.remove();
    });

    readLabel.appendChild(readCheckbox);

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(genre);
    book.appendChild(readLabel);
    book.appendChild(deleteBtn);

    booksContainer.appendChild(book);
  }
});
