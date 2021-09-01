const reviewRouter = require("express").Router();
const Review = require("../models/review");
const middleware = require("../utils/middleware");

reviewRouter.get("/", async (request, response) => {
  const items = await Review.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(items);
});

reviewRouter.get("/:id", async (request, response) => {
  const review = await Review.findById(request.params.id);

  if (review) {
    response.json(review);
  } else {
    response.status(404).end();
  }
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
    date: body.date,
    user: user._id,
  });

  const savedReview = await review.save();
  user.reviews = user.reviews.concat(savedReview._id);
  await user.save();

  response.status(201).json(savedReview);
});

reviewRouter.delete(
  "/:id",
  middleware.userExtractor,
  async (request, response) => {
    // authenticate user before proceeding with DELETE operation
    const user = request.user;
    const review = await Review.findById(request.params.id);

    if (review.user.toString() !== user.id.toString()) {
      return response
        .status(401)
        .json({ error: "Only owner of this review has permission to delete." });
    }

    user.reviews = user.reviews.filter(
      (r) => r.toString() !== review.id.toString()
    );
    await review.remove();
    await user.save();
    response.status(204).end();
  }
);

module.exports = reviewRouter;
