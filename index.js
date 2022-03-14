const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector(".form");
const listItem = document.querySelector('.books-list');

// books = {
//   id: "",
//   title: "",
//   author: "",
// };

booksList = [];

function addBook(book) {
  booksList.push(book);
}

const renderBook  = () => {
  listItem.innerHTML = '';

  booksList.forEach((book) => {
    listItem.innerHTML += `
          <li>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button class="removeBtn">Remove</button>
          </li>
    `
  })
    
}; 


addBookBtn.addEventListener("click", (e) => {
  // const title = document.getElementById("title").value;
  // const author = document.getElementById("author").value;
  // console.log("Add clicked");
  // console.log(title + " and " + author);
  // books.title= title;
  // books.author=author;
  // e.preventDefault();

  const title = form.title.value;
  const author = form.author.value;

  form.title.value = '';
  form.author.value = '';
  
  addBook({ title, author })
  renderBook();
  
});
