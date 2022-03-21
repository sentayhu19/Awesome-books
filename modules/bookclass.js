export default class Books {
  constructor() {
    this.list = localStorage.getItem('booksList')
      ? JSON.parse(localStorage.getItem('booksList'))
      : [];
  }

  removeBook(title) {
    this.list = this.list.filter((currentBook) => currentBook.title !== title);
    localStorage.setItem('booksList', JSON.stringify(this.list));
  }

  addBook(book) {
    this.list.push(book);
    localStorage.setItem('booksList', JSON.stringify(this.list));
  }
}