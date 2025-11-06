import express from "express";
import cors from "cors";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

export default app;
