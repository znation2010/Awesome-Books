import bookList from './bookList.js';

class InsertBooks {
  static addNewData(subject, wr) {
    const storeData = JSON.parse(localStorage.getItem('addedBooks')) || [];
    const error = document.querySelector('.error');

    if (subject.value === '' || wr.value === '') {
      InsertBooks.displayMessage(error, "Author or Book Title can't be empty");
    } else {
      storeData.push({ title: subject.value, author: wr.value });
      localStorage.setItem('addedBooks', JSON.stringify(storeData));

      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      const { value: title } = subject;
      const { value: author } = wr;
      const bookinfo = `
        <div class="book-info">
          <span>"${title}"</span>
          <span>by ${author}</span>
        </div>
      `;
      bookItem.innerHTML = bookinfo;

      InsertBooks.displayMessage(error, 'Success !!!', 'success');
      subject.value = '';
      wr.value = '';
      setTimeout(() => {
        error.innerHTML = '';
      }, 3000);

      bookList.displayBooks();
    }
  }

  static displayMessage(element, message, className = 'error') {
    element.innerHTML = message;
    element.classList.replace('error', className);
    setTimeout(() => {
      element.innerHTML = '';
      element.classList.replace(className, 'error');
    }, 600);
  }
}

export default InsertBooks;
