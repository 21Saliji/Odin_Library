const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus || false;
}

Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus;
};

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = index;

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.readStatus ? 'Yes' : 'No'}</p>
            <button class="toggle-read-button">Toggle Read Status</button>
            <button class="remove-button">Remove Book</button>
        `;
        bookContainer.appendChild(bookCard);
    });

    
    addEventListeners();
}


function addEventListeners() {
    const bookContainer = document.getElementById('book-container');

    
    bookContainer.removeEventListener('click', handleBookClick); 
    bookContainer.addEventListener('click', handleBookClick); 

}

function handleBookClick(event) {  
    if (event.target.classList.contains('toggle-read-button')) {
        const index = event.target.closest('.book-card').dataset.index;
        myLibrary[index].toggleReadStatus();
        displayBooks();
    } else if (event.target.classList.contains('remove-button')) {
        const index = event.target.closest('.book-card').dataset.index;
        removeBook(index);
    }
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function clearBooks() {
    myLibrary.length = 0;
    displayBooks();
}
  
  const newBookBtn = document.getElementById('newBookBtn');
  const newBookFormModal = document.getElementById('newBookFormModal');
  const newBookForm = document.getElementById('newBookForm');
  const cancelNewBook = document.getElementById('cancelNewBook');
  const clearBooksBtn = document.getElementById('clearBooksBtn');
  
  newBookBtn.addEventListener('click', () => {
      newBookFormModal.style.display = 'block';
  });
  
  newBookForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('bookAuthor').value;
      const pages = document.getElementById('bookPages').value;
      const readStatus = document.getElementById('bookReadStatus').value === 'true';
  
      addBookToLibrary(title, author, pages, readStatus);
  
      newBookForm.reset();
      newBookFormModal.style.display = 'none';
  });
  
  cancelNewBook.addEventListener('click', () => {
      newBookFormModal.style.display = 'none';
  });
  
  clearBooksBtn.addEventListener('click', clearBooks);
  
  
  const toggleButton = document.getElementById('toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      if (document.body.classList.contains('dark-mode')) {
          sunIcon.style.display = "none";
          moonIcon.style.display = "inline";
      } else {
          sunIcon.style.display = "inline";
          moonIcon.style.display = "none";
      }
  });
  
  
  // (for testing)
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
  addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
  displayBooks();
