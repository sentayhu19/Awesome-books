/* eslint-disable import/extensions, no-unused-vars  */
import selector from './modules/selectors.js';
import navigator from './modules/spa-manager.js';
import Books from './modules/bookclass.js';
import { renderBooks, booksList } from './modules/renderbooks.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const datetime1 = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');
selector.timeanddate.textContent = datetime1;
renderBooks();
selector.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = selector.form.title.value.trim();
  const author = selector.form.author.value.trim();
  selector.form.title.value = '';
  selector.form.author.value = '';
  booksList.addBook({ title, author });
  renderBooks();
});
