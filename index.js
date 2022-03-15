const listElm = document.querySelector('.books-list');
const form = document.querySelector('.form');

class Books {
  constructor() {
    this.list = localStorage.getItem('booksList')
      ? JSON.parse(localStorage.getItem('booksList'))
      : [];
  }

  addBook(book) {
    this.list.push(book);

    localStorage.setItem('booksList', JSON.stringify(this.list));
  }

  removeBook(title) {
    // if (book) {
    this.list = this.list.filter((currentBook) => currentBook.title !== title);

    localStorage.setItem('booksList', JSON.stringify(this.list));
    // }
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

  const removeBtns = document.querySelectorAll('li button');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const elem = btn.parentNode;
      const bookTitle = elem.querySelector('.title').textContent;

      booksList.removeBook(bookTitle);
      elem.remove();
    });
  });
}

renderBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const author = form.author.value.trim();

  form.title.value = '';
  form.author.value = '';
  document.getElementById('show-book').style.cssText = 'display: block';
  booksList.addBook({ title, author });
  renderBooks();

  // return false;
});
function clean1() {
  if (booksList.list.length === 0) {
    document.getElementById('show-book').style.cssText = 'display: none';
  }
}
window.addEventListener('DOMContentLoaded', () => {
  clean1();
});