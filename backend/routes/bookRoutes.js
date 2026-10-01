const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// POST /api/books
router.post("/", async (req, res) => {
  try {
    const {
      bookTitle,
      authorName,
      isbn,
      category,
      publicationYear
    } = req.body;

    // Check required fields
    if (
      !bookTitle ||
      !authorName ||
      !isbn ||
      !category ||
      !publicationYear
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Create new book
    const newBook = new Book({
      bookTitle,
      authorName,
      isbn,
      category,
      publicationYear
    });

    // Save book to MongoDB
    const savedBook = await newBook.save();

    // Send response
    res.status(201).json({
      message: "Book added successfully",
      book: savedBook
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

module.exports = router;