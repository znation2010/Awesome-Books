/* eslint no-use-before-define: ["error", { "functions": false }] */
class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.bookForm = document.getElementById('bookForm');

    this.bookForm.addEventListener('submit', this.handleFormSubmit.bind(this));

    this.displayBookList();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.displayBookList();
  }

  displayBookList() {
    this.bookList.innerHTML = '';

    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      const bookCell = document.createElement('td');
      bookCell.textContent = `"${book.title}" by ${book.author}`;

      const removeCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.classList.add('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });
      removeCell.appendChild(removeButton);

      row.appendChild(bookCell);
      row.appendChild(removeCell);

      this.bookList.appendChild(row);
    });
  }

  addBook(title, author) {
    const book = { title, author };
    this.books.push(book);
    this.updateLocalStorage();
    this.displayBookList();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const author = authorInput.value;
    this.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

// eslint-disable-next-line no-unused-vars
const bookCollection = new BookCollection();

const bookList = document.querySelector('.all-books');
const addBookForm = document.querySelector('.add-book-box');
const contact = document.querySelector('.contact-me-box');

const list = document.querySelector('.list');
const addBookLink = document.querySelector('.add-new');
const contactLink = document.querySelector('.contact');

const booksListPage = (e) => {
  e.preventDefault();
  bookList.classList.remove('hidden');
  addBookForm.classList.add('hidden');
  contact.classList.add('hidden');
};

const addBookPage = (e) => {
  e.preventDefault();
  addBookForm.classList.remove('hidden');
  bookList.classList.add('hidden');
  contact.classList.add('hidden');
};

const contactPage = (e) => {
  e.preventDefault();
  contact.classList.remove('hidden');
  bookList.classList.add('hidden');
  addBookForm.classList.add('hidden');
};
list.addEventListener('click', booksListPage);
addBookLink.addEventListener('click', addBookPage);
contactLink.addEventListener('click', contactPage);

const dateBox = document.querySelector('date-box');

function updateDate() {
  const date = new Date();
  dateBox.innerHTML = date;
}

updateDate();

setInterval(updateDate, 1000);
