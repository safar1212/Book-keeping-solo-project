/* eslint-disable no-unused-vars */

import Book from './modules/booksClass.js';
import addBook from './modules/addBook.js';
import list from './modules/list.js';
import contactUs from './modules/contactUs.js';
import { dateTime, loadDate } from './modules/date.js';

const Bookstore = new Book();

window.onload = () => { Bookstore.addBookToList(); };

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#tuthor');
  Bookstore.addBook(title.value, author.value);
  title.value = '';
  author.value = '';
});
