const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path.cjs");

router.get("/add-product", (req, res, next) => {
  const servingFile = path.join(rootDir, "../", "views", "add-product.html");

  res.sendFile(servingFile);
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
