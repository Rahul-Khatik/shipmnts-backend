const express = require("express");
const { listBooks, addBooks } = require("../controllers/book");
const router = express.Router();

router.get("/books", listBooks);

router.post("/books", addBooks);

module.exports = router;