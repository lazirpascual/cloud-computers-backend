const reviewRouter = require("express").Router();
const Review = require("../models/review");
const User = require("../models/user");
const middleware = require("../utils/middleware");

reviewRouter.get("/", async (request, response) => {
  const items = await Review.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(items);
});

reviewRouter.post("/", middleware.userExtractor, async (request, response) => {
  const body = request.body;
  // authenticate user before proceeding with POST operation
  const user = request.user;

  const review = new Review({
    rating: body.rating,
    title: body.title,
    comment: body.comment,
    recommend: body.recommend,
    productId: body.productId,
    user: user._id,
  });

  const savedReview = await review.save();
  user.reviews = user.reviews.concat(savedReview._id);
  await user.save();

  response.status(201).json(savedReview);
});

module.exports = reviewRouter;
