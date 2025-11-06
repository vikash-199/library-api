import { Author } from "../models/authorModel.js";
import { Book } from "../models/bookModel.js";
export const createBook = async (req, res) => {
  try {
    const author = await Author.findById(req.body.author);
    if (!author) return res.status(404).json({ message: "Author not found" });

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all books with author details + pagination
export const getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const books = await Book.find()
      .populate("author", "name nationality")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search by author name
export const searchByAuthor = async (req, res) => {
  try {
    const { name } = req.query;
    const authors = await Author.find({ name: new RegExp(name, "i") });
    const authorIds = authors.map((a) => a._id);
    const books = await Book.find({ author: { $in: authorIds } }).populate(
      "author",
      "name"
    );
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
