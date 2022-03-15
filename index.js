const addBookBtn = document.querySelector('.add-book-btn');
const form = document.querySelector('.form');
const listItem = document.querySelector('.books-list');

let booksList = localStorage.getItem('awbooks')
  ? JSON.parse(localStorage.getItem('awbooks'))
  : [];

function addBook(book) {
  booksList.push(book);

  localStorage.setItem('awbooks', JSON.stringify(booksList));
}
function removeBook(book) {
  booksList = booksList.filter((currBook) => currBook.title !== book.title);
  localStorage.setItem('awbooks', JSON.stringify(booksList));
}

const renderBook = () => {
  listItem.innerHTML = '';

  booksList.forEach((book) => {
    listItem.innerHTML += `
          <li id="list-items">        
              <p>${book.title} ${book.author}</p>
              <div>
              <button class="removeBtn">Remove</button>
              <div>
          </li>
    `;
  });

  const removeBtn = document.querySelectorAll('.removeBtn');

  removeBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      removeBook(booksList[i]);
      btn.parentNode.parentNode.remove();
    });
  });
};

renderBook();
const error = document.getElementById("error");
window.addEventListener('DOMContentLoaded', () => { 
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
 if (title==="" && author==="")
 {
   error.innerHTML=`<font color="red">please fill the textbox</font>`;
   e.preventDefault();
 }
 else{
  form.title.value = '';
  form.author.value = '';
  addBook({ title, author });
  renderBook();
 }
});
});
