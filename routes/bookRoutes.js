import express from "express";
import {
  createBook,
  getAllBooks,
  searchByAuthor,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/search", searchByAuthor);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
