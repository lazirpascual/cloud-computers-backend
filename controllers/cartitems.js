const cartItemsRouter = require("express").Router();
const CartItem = require("../models/cartitem");

cartItemsRouter.get("/", (request, response) => {
  CartItem.find({}).then((products) => {
    response.json(products);
  });
});

cartItemsRouter.get("/:id", (request, response, next) => {
  CartItem.findById(request.params.id)
    .then((item) => {
      if (item) {
        response.json(item);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

cartItemsRouter.post("/", (request, response, next) => {
  const cartItem = new CartItem(request.body);

  cartItem.save().then((result) => {
    response.status(201).json(result);
  });
});

cartItemsRouter.delete("/:id", (request, response) => {
  CartItem.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

cartItemsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const cartItem = {
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    category: body.category,
    imgPath: body.imgPath,
    imgPreview: body.imgPreview,
    productPreview: body.productPreview,
  };

  CartItem.findByIdAndUpdate(request.params.id, cartItem, { new: true })
    .then((updatedItem) => {
      response.json(updatedItem);
    })
    .catch((error) => next(error));
});

module.exports = cartItemsRouter;
