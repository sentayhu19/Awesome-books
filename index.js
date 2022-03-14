const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector(".form");
const listItem = document.querySelector(".books-list");
const removeBtn = document.getElementsByClassName("removeBtn");

// booksList = [];
let booksList = localStorage.getItem('awbooks')
  ? JSON.parse(localStorage.getItem('awbooks'))
  : [];

function addBook(book) {
  booksList.push(book);

  localStorage.setItem('awbooks', JSON.stringify(booksList))
}

function removeBook(book) {

  booksList = booksList.filter((currBook) => currBook.title !== book.title);
  
  
  // console.log("Remove clicked");
  // console.log("remove book "+booksList.title);
  // booksList.filter((booksList) => booksList.id === btnId).forEach((book, i) =>{
  //     console.log("After forEAch Remove clicked");
  //     const idLi =btnId+"block";
  //     book.splice(i,1);
  //     document.getElementById(idLi).style.cssText="display: none;";
  //   });

    localStorage.setItem('awbooks', JSON.stringify(booksList))
}


const renderBook = () => {
  listItem.innerHTML = "";

  booksList.forEach((book) => {
    listItem.innerHTML += `
          <li id=${book.id+"block"}>
           <div>          
              <p>${book.title}</p>
              <p>${book.author}</p>
              <button id=${book.id} onclick="remove(this.id)      "class="removeBtn">Remove</button>
              <hr>
            </div>
          </li>
    `;   
  });

    const removeBtn = document.querySelectorAll('.removeBtn');
  
  removeBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {

      removeBook(booksList[i]);
      btn.parentNode.parentNode.remove();
    })
  })
};

renderBook();

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const title = form.title.value;
  const author = form.author.value;
  // const id = Math.floor(Math.random(9) * 1000);
  // const bookstore = { id: id, title: title, author: author };

  // var stored =JSON.parse(localStorage.getItem("bookstore"));
  //stored.push(bookstore);
  // const store = JSON.stringify(bookstore);
  // localStorage.setItem('bookstore', store);
  
  form.title.value = "";
  form.author.value = "";

  // addBook({ id, title, author });
  addBook({ title, author });
  renderBook();
});
