import selector from './modules/selectors.js';
import navigator from './modules/spa-manager.js';
import Books from './modules/bookclass.js';
import DateNowString from './modules/luxon.js';
import { renderBooks, booksList } from './modules/renderbooks.js';

selector.timeanddate.textContent = DateNowString();
renderBooks();
selector.form.addEventListener('submit', (e) => {
  console.log('Submit clicked');
  e.preventDefault();
  const title = selector.form.title.value.trim();
  const author = selector.form.author.value.trim();
  selector.form.title.value = '';
  selector.form.author.value = '';
  booksList.addBook({ title, author });
  renderBooks();
});
