import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("HEEEY it fired")
    return axios.get("/api/book");
    
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/book/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/book", bookData);
  },
  // // Searches for book
  // getBookSearch: function() {
  //   return axios.get("/api/bookSearch");
  // }
};