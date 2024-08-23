const express = require("express");
const router = express.Router();

router.get("/authors", listAuthors);

router.post("/authors", addAuthors);

module.exports = router;