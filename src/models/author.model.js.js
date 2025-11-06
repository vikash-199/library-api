import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    nationality: String,
  },
  { timestamps: true }
);

export const Author = mongoose.model("Author", authorSchema);
