const express = require("express");
const router = express.Router();

router.get("/books", listBooks);

router.post("/books", addBooks);

module.exports = router;