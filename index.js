const addBookBtn = document.querySelector('.add-book-btn');
const listElm = document.querySelector('.books-list');
const form = document.querySelector('.form');
class Books {
  constructor() {
    this.list = localStorage.getItem('booksList')
    ? JSON.parse(localStorage.getItem('booksList'))
    : [];
  }
  
  addBook(book) {
    this.list.push(book)
    localStorage.setItem('booksList', JSON.stringify(this.list));
  }

  removeBook(title) {
    this.list = this.list.filter((currentBook) => currentBook.title !== title);
    localStorage.setItem('booksList', JSON.stringify(this.list));
  } 
}

  
const booksList = new Books();

function renderBooks() {
  listElm.innerHTML = '';

  booksList.list.forEach((book) => {
    listElm.innerHTML += `
          <li>        
              <p><span class="title">${book.title}</span> ${book.author}</p>
              <button class="remBtn">Remove</button>              
          </li>
    `;
  });  

  const removeBtns = document.querySelectorAll('.remBtn');

  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const elem = btn.parentNode;
      
      const bookTitle = elem.querySelector('.title').textContent;

      booksList.removeBook(bookTitle);
      elem.remove();
    });
  });
};

renderBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;

  form.title.value = '';
  form.author.value = '';
  
  booksList.addBook({ title, author });
  renderBooks();
});
