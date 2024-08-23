const express = require("express");
const { listAuthors, addAuthors } = require("../controllers/author");
const router = express.Router();

router.get("/authors", listAuthors);

router.post("/authors", addAuthors);

module.exports = router;