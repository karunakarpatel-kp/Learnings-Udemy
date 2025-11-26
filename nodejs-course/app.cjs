const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("../node-js-routes/admin.cjs");
const shopRoutes = require("../node-js-routes/shop.cjs");
const errorRoutes = require("../node-js-routes/404.cjs");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
