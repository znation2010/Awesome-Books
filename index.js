// Retrieve books from localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// Function to display the book list
function displayBookList() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBook(index);
    });
    removeCell.appendChild(removeButton);

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(removeCell);

    bookList.appendChild(row);
  });
}
// Function to add a new book to the collection
function addBook(title, author) {
  const book = { title, author };
  books.push(book);

  // Update localStorage with the new book
  localStorage.setItem("books", JSON.stringify(books));

  // Render the updated book list
  displayBookList();
}

// Function to remove a book from the collection
function removeBook(index) {
  books.splice(index, 1);

  // Update localStorage with the updated book list
  localStorage.setItem("books", JSON.stringify(books));

  // Render the updated book list
  displayBookList();
}

// Event listener for the form submission
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);

  // Reset form inputs
  titleInput.value = "";
  authorInput.value = "";
});

// Render the initial book list
displayBookList();
