import { Author } from "../models/authorModel.js";

export const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
