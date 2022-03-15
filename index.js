const addBookBtn = document.querySelector('.add-book-btn');
const form = document.querySelector('.form');
const listItem = document.querySelector('.books-list');

class Books {
  constructor () {
    this.list = localStorage.getItem('awbooks')
    ? JSON.parse(localStorage.getItem('awbooks'))
    : [];
  }
  removeBook(title) {
    this.list = this.list.filter((currBook) => currBook.title !== title);
    localStorage.setItem('awbooks', JSON.stringify(this.list));
    console.log('removed');
  }
  addBook(book) {
    this.list.push(book);
    localStorage.setItem('awbooks', JSON.stringify(this.list));
    document.getElementById('show-book').style.cssText='display: block';
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

  function clean1(){
    console.log("Am clean")
   if (bookList.list.length===0)
   {
      console.log("Empty");
    document.getElementById('show-book').style.cssText='display: none';  
  }
  }
  clean1();
  const removeBtn = document.querySelectorAll('.removeBtn');

  removeBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const elem = btn.parentNode;
      
      bookTitle = document.querySelector('.title').textContent;

      bookList.removeBook(bookTitle);
      elem.remove();
      clean1();
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
