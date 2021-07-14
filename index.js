const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Product = require("./models/product");

app.use(cors());
app.use(express.json());

app.get("/api/products", (request, response) => {
  Product.find({}).then((products) => {
    response.json(products);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
