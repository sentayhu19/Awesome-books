books = {
  id: "",
  title: "",
  author: "",
};
const addBookBtn = document.querySelector(".add-book-btn");

const form = document.querySelector(".form");
addBookBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  console.log("Add clicked");
  console.log(title + " and " + author);
  books.title= title;
  books.author=author;
  
});
