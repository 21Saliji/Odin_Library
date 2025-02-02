const myLibrary = [];

function Book(title, author, pages, readStatus) {
  // the constructor..
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  // take params, create a book then store it in the array
  const newBook = new Book(title,author, pages, readStatus);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook(){
    const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = ''; // Clear any existing books

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.setAttribute('data-index', index); // Set data-index to track book in the array

    const title = document.createElement('h3');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const readStatus = document.createElement('p');
    readStatus.textContent = `Read: ${book.readStatus ? 'Yes' : 'No'}`;
    bookCard.appendChild(readStatus);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Read Status';
    toggleButton.addEventListener('click', function() {
      book.toggleReadStatus();
      displayBooks(); // Re-render books to show updated status
    });
    bookCard.appendChild(toggleButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';
    removeButton.addEventListener('click', function() {
      removeBook(index);
    });
    bookCard.appendChild(removeButton);

    bookContainer.appendChild(bookCard);
  });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(); // Update the display after removing a book
  }
  
  // Function to clear all books from the library
  function clearBooks() {
    myLibrary.length = 0;
    displayBooks(); // Update the display after clearing
  }
  
  // Handle New Book form visibility
  document.getElementById('newBookBtn').addEventListener('click', function() {
    document.getElementById('newBookFormModal').style.display = 'block';
  });
  
  // Handle form submission
  document.getElementById('newBookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = document.getElementById('bookPages').value;
    const readStatus = document.getElementById('bookReadStatus').value === 'true';
  
    addBookToLibrary(title, author, pages, readStatus);
  
    // Reset and hide the form after submission
    document.getElementById('newBookForm').reset();
    document.getElementById('newBookFormModal').style.display = 'none';
  });
  
  // Cancel New Book form
  document.getElementById('cancelNewBook').addEventListener('click', function() {
    document.getElementById('newBookFormModal').style.display = 'none';
  });
  
  // Handle Clear Books button
  document.getElementById('clearBooksBtn').addEventListener('click', clearBooks);


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');


    if (element.classList.contains("dark-mode")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    } else {
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
    }}