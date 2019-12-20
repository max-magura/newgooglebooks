const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String},
    author: {type: String},
    publishedDate: {type:Date},
    description: {type:String},
    imageUrl: {type:String},
    link: {type:String}
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;


