"use strict";
const addBtn = document.getElementById("addBook");
const showBooksBtn = document.getElementById("showBooks");

let myLibrary = [];

class Book {
  constructor(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
  }
  addBookToLibrary() {
    myLibrary.push(this);
  }
}
