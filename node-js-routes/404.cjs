const express = require("express");
const path = require("path");

const router = express.Router();

router.use((req, res, next) => {
  const servingHTMLFile = path.join(__dirname, "../", "views", "404.html");
  res.statusCode = 404;
  res.sendFile(servingHTMLFile);
});

module.exports = router;
