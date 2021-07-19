const productsRouter = require("express").Router();
const Product = require("../models/product");

productsRouter.get("/", (request, response) => {
  Product.find({}).then((products) => {
    response.json(products);
  });
});

productsRouter.get("/:id", (request, response, next) => {
  Product.findById(request.params.id)
    .then((product) => {
      if (product) {
        response.json(product);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

module.exports = productsRouter;
