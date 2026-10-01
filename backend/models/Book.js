const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: true,
      trim: true
    },

    authorName: {
      type: String,
      required: true,
      trim: true
    },

    isbn: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    publicationYear: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;