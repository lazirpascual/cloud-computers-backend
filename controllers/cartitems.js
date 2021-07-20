const cartItemsRouter = require("express").Router();
const CartItem = require("../models/cartitem");

cartItemsRouter.get("/", async (request, response) => {
  const items = await CartItem.find({});
  response.json(items);
});

cartItemsRouter.get("/:id", async (request, response) => {
  const item = await CartItem.findById(request.params.id);

  if (item) {
    response.json(item);
  } else {
    response.status(404).end();
  }
});

cartItemsRouter.post("/", async (request, response) => {
  const item = new CartItem(request.body);

  const items = await item.save();
  response.json(items);
});

cartItemsRouter.delete("/:id", async (request, response) => {
  const item = await CartItem.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

cartItemsRouter.put("/:id", async (request, response) => {
  const item = new CartItem(request.body);

  const updatedItem = CartItem.findByIdAndUpdate(request.params.id, item, {
    new: true,
  });
  response.json(updatedItem);
});

module.exports = cartItemsRouter;
