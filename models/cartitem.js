const mongoose = require("mongoose");

const cartitemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
  imgPreview: {
    type: String,
    required: true,
  },
  productPreview: {
    type: String,
    required: true,
  },
});

cartitemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Cartitem", cartitemSchema);
