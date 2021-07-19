const mongoose = require("mongoose");

const cartitemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  imgPath: String,
  imgPreview: String,
  productPreview: String,
});

cartitemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Cartitem", cartitemSchema);
