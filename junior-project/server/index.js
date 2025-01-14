const express = require("express");
const cors = require("cors")
const Connection = require("./Models/index.js")
const Admin = require("./Routes/Admin.js")
const Product = require("./Routes/Product.js")
const Category = require("./Routes/Category.js")
let app = express();
app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + "/../client/dist"));
app.use("/admin", Admin);
app.use("/product", Product);
app.use("/category", Category)
let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
