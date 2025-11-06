import express from "express";
import { createAuthor } from "../controllers/authorController.js";

const router = express.Router();
router.post("/", createAuthor);

export default router;
