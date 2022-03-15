const addBookBtn = document.querySelector('.add-book-btn');
const form = document.querySelector('.form');
const listItem = document.querySelector('.books-list');

class Books {
  constructor () {
    this.list = localStorage.getItem('awbooks')
    ? JSON.parse(localStorage.getItem('awbooks'))
    : [];
  }

}

const bookList = new Books()

const renderBook = () => {
  listItem.innerHTML = '';

  bookList.list.forEach((book) => {
    listItem.innerHTML += `
          <li id="list-items">        
              <p><span class="title">${book.title}</span> ${book.author}</p>
              <button class="removeBtn">Remove</button>              
          </li>
    `;
  });

  const removeBtn = document.querySelectorAll('.removeBtn');

  removeBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const elem = btn.parentNode;
      
      bookTitle = document.querySelector('.title').textContent;

      bookList.removeBook(bookTitle);
      elem.remove();

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
  if (title==="" || author==="")
  {
    error.innerHTML=`<font color="red">please fill the textbox</font>`;
    e.preventDefault();
  }
  else{
    form.title.value = '';
    form.author.value = '';
    bookList.addBook({ title, author });
    renderBook();
  }
  });
});
