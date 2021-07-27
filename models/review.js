const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const reviewSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  comment: String,
  recommend: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: String,
  date: String,
});

reviewSchema.plugin(uniqueValidator);

reviewSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
