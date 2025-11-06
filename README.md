# 📚 Library Management API

A simple **Node.js + Express + MongoDB** backend for managing authors and books.

This project demonstrates clean backend architecture, MongoDB schema design, and REST API best practices.

---

## 🚀 How to Start the Server

```bash
# 1️⃣ Go to the project folder
cd library-api

# 2️⃣ Install all dependencies
npm install

# 3️⃣ Start the server
npm start
```

# you can tast in postmen all endpoints

| Method     | Endpoint                      | Description                 |
| ---------- | ----------------------------- | --------------------------- |
| **POST**   | `/api/authors`                | Create new author           |
| **POST**   | `/api/books`                  | Create new book             |
| **GET**    | `/api/books`                  | Get all books (with author) |
| **GET**    | `/api/books/search?name=John` | Search books by author name |
| **PUT**    | `/api/books/:id`              | Update book details         |
| **DELETE** | `/api/books/:id`              | Delete book by ID           |

POST /api/authors
Content-Type: application/json

{
"name": "J.K. Rowling",
"age": 57,
"nationality": "British"
}

POST /api/books
Content-Type: application/json

{
"title": "Harry Potter and the Sorcerer's Stone",
"genre": "Fantasy",
"publishedYear": 1997,
"author": "AUTHOR_ID_HERE"
}
