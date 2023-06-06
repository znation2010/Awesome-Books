// Retrieve books from localStorage  
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display the book list
function displayBookList() {
 const bookList = document.getElementById('bookList');
 bookList.innerHTML = '';

 books.forEach((book, index) => {
     const row = document.createElement('tr');

     const titleCell = document.createElement('td');
     titleCell.textContent = book.title;

     const authorCell = document.createElement('td');
     authorCell.textContent = book.author;

     const removeCell = document.createElement('td');
     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove';
     removeButton.addEventListener('click', () => {
         removeBook(index);
     });
     removeCell.appendChild(removeButton);

     row.appendChild(titleCell);
     row.appendChild(authorCell);
     row.appendChild(removeCell);

     bookList.appendChild(row);
 });
}
