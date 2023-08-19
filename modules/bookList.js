class bookList {
  // Display books from local storage to the UI
  static displayBooks() {
    const storeData = JSON.parse(localStorage.getItem('addedBooks')) || [];
    const listOfBooks = document.querySelector('.container');
    listOfBooks.innerHTML = '';
    storeData.forEach((book, i) => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      const bookinfo = document.createElement('div');
      bookinfo.className = 'book-info';
      bookinfo.innerHTML = `
        <span>"${book.title}"</span>
        <span> by ${book.author}</span>
      `;

      const rmvbtn = document.createElement('button');
      rmvbtn.className = 'mybutton';
      rmvbtn.id = i;
      rmvbtn.innerHTML = 'Remove';

      bookItem.appendChild(bookinfo);
      bookItem.appendChild(rmvbtn);
      listOfBooks.appendChild(bookItem);

      const rmb = document.getElementById(i);
      rmb.addEventListener('click', () => {
        storeData.splice(i, 1);
        localStorage.setItem('addedBooks', JSON.stringify(storeData));
        const beingrmv = document.getElementById(i);
        beingrmv.parentElement.remove();
      });
    });
  }

  // Add new book data to local storage
  static addNewData(title, author) {
    const storeData = JSON.parse(localStorage.getItem('addedBooks')) || [];
    storeData.push({
      title,
      author,
    });
    localStorage.setItem('addedBooks', JSON.stringify(storeData));
  }

  // Remove book data from local storage
  static removeBook(i) {
    const storeData = JSON.parse(localStorage.getItem('addedBooks')) || [];
    storeData.splice(i, 1);
    localStorage.setItem('addedBooks', JSON.stringify(storeData));
  }
}

export default bookList;
