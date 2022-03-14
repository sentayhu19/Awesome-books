const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector(".form");
const listItem = document.querySelector(".books-list");
const removeBtn = document.getElementsByClassName("removeBtn");

booksList = [];

function remove(btnId) {
  console.log("Remove clicked");
  console.log("remove book "+booksList.title);
  booksList.filter((booksList) => booksList.id === btnId).forEach((book ,i ) =>{
    console.log("After forEAch Remove clicked");
    const idLi =btnId+"block";
    book.splice(i,1);
 document.getElementById(idLi).style.cssText="display: none;";
});
}
function addBook(book) {
  booksList.push(book);
}

const renderBook = () => {
  listItem.innerHTML = "";

  booksList.forEach((book) => {
    listItem.innerHTML += `
          <li id=${book.id+"block"}>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button id=${book.id} onclick="remove(this.id) "class="removeBtn">Remove</button>
            <hr>
          </li>
    `;
   
  });
};

addBookBtn.addEventListener("click", (e) => {
  const title = form.title.value;
  const author = form.author.value;
  const id = Math.floor(Math.random(9) * 1000);
  const bookstore = { id: id, title: title, author: author };

  var stored =JSON.parse(localStorage.getItem("bookstore"));
  //stored.push(bookstore);
  const store = JSON.stringify(bookstore);
  localStorage.setItem('bookstore', store);
  
  form.title.value = "";
  form.author.value = "";

  addBook({ id, title, author });
  renderBook();
});
