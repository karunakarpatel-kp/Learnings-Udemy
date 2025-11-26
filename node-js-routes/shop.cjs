const express = require("express");
const path = require("path");
const rootDir = require("../util/path.cjs");

const router = express.Router();

router.get("/", (req, res, next) => {
  const servingFile = path.join(rootDir, "../", "views", "shop.html");
  res.sendFile(servingFile);
});

module.exports = router;
