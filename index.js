class Book {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('Bookstore')) || [];
    }
  
    addBook(title, author) {
      this.books.push({ title, author });
      this.storeBookData();
      this.addBookToList();
    }
  
    addBookToList() {
      const table = document.querySelector('#book-list');
      let listOfBooks = '';
      this.books.forEach((book, index) => {
        listOfBooks += `
      <tr class="table-row">
       <td>"${book.title}" by ${book.author}</td>
      <td><button class="delete" type="button" id=${index}>Remove</button></td> 
      </tr>`;
      });
      table.innerHTML = listOfBooks;
      if (this.books.length > 0) {
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((btn) => { btn.addEventListener('click', this.deleteBook.bind(this)); });
      }
    }
  
    deleteBook(click) {
      const bookId = click.target.id;
      this.books.splice(bookId, 1);
      this.storeBookData();
      this.addBookToList();
    }
  
    storeBookData() {
      const bookdata = JSON.stringify(this.books);
      localStorage.setItem('Bookstore', bookdata);
    }
  }
  
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
  
  const list = document.querySelector('#n1');
  const addBook = document.querySelector('#n2');
  const contactUs = document.querySelector('#n3');
  
  list.addEventListener('click', () => {
    document.getElementById('show-book').style.cssText = 'display: flex;';
    document.getElementById('book-form').style.cssText = 'display: none;';
    document.getElementById('show-contact').style.cssText = 'display: none;';
  });
  
  addBook.addEventListener('click', () => {
    document.getElementById('show-book').style.cssText = 'display: none;';
    document.getElementById('book-form').style.cssText = 'display: flex;';
    document.getElementById('show-contact').style.cssText = 'display: none;';
  });
  
  contactUs.addEventListener('click', () => {
    document.getElementById('show-book').style.cssText = 'display: none;';
    document.getElementById('book-form').style.cssText = 'display: none;';
    document.getElementById('show-contact').style.cssText = 'display: flex;';
  });
  
  // function displayListOfBooks() {
  
  // }
  
  // const displayBookForm = () => {
  //   var elem = document.getElementById("book");
  //    elem.classList.add("remove-page");
  //   document.getElementByClassName('book-section').style.cssText = ' display: none;';
  //   document.getElementById('book-form').style.cssText = 'display: flex;';
  //   document.getElementByClassName('contact-us').style.cssText = 'display: none;';
  // }
  
  // const displayContactPage = () => {
  //   var elem = document.getElementByClassName("contact-us");
  //    elem.classList.add("remove-page");
  //   document.getElementByClassName('book-section').style.cssText = ' display: none;';
  //   document.getElementById('book-form').style.cssText = 'display: none;';
  //   document.getElementByClassName('contact-us').style.cssText = 'display: flex;';
  // }