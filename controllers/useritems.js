const userItemsRouter = require("express").Router();
const UserItem = require("../models/useritem");
const User = require("../models/user");
const middleware = require("../utils/middleware");

userItemsRouter.get("/", async (request, response) => {
  const items = await UserItem.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(items);
});

userItemsRouter.get("/:id", async (request, response) => {
  const item = await UserItem.findById(request.params.id);

  if (item) {
    response.json(item);
  } else {
    response.status(404).end();
  }
});

userItemsRouter.post(
  "/",
  middleware.userExtractor,
  async (request, response) => {
    const body = request.body;
    // authenticate user before proceeding with POST operation
    const user = request.user;

    const item = new UserItem({
      name: body.name,
      price: body.price,
      quantity: body.quantity,
      category: body.category,
      imgPath: body.imgPath,
      imgPreview: body.imgPreview,
      productPreview: body.productPreview,
      user: user._id,
    });

    const savedItem = await item.save();
    user.useritems = user.useritems.concat(savedItem._id);
    await user.save();

    response.status(201).json(savedItem);
  }
);

module.exports = userItemsRouter;
