import selector from './selectors.js';
import Books from './bookclass.js';

const booksList = new Books();
const renderBooks = () => {
  selector.listElm.innerHTML = '';

  booksList.list.forEach((book) => {
    selector.listElm.innerHTML += `
        <li>
            <p><span class="title">${book.title}</span> by ${book.author}</p>
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
};
export { renderBooks, booksList };