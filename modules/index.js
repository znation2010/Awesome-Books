import { DateTime } from './luxon.js';
import InsertBooks from './addBooks.js';
import myNav from './navigator.js';
import bookList from './bookList.js';

const date = DateTime.fromISO(DateTime.now()).toFormat('FF');
const disdate = document.querySelector('.date');
const p = document.createElement('p');
p.innerHTML = `${date}`;
disdate.appendChild(p);

bookList.displayBooks();

// Add new data to local storage
const subject = document.querySelector('.title');
const writer = document.querySelector('.author');

const addbtndiv = document.querySelector('.add-btn-div');
const addbtn = document.createElement('button');
addbtn.className = 'add-newbook';
addbtn.innerHTML = 'Add';
addbtndiv.appendChild(addbtn);

const addnew = document.querySelector('.form');
addnew.addEventListener('submit', () => InsertBooks.addNewData(subject, writer));

window.onload = bookList.displayBooks;

myNav.navigationBar();
