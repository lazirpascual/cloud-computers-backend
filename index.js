const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { Product, CartItem } = require("./models/model");

app.use(cors());
app.use(express.json());

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

morgan.token("body", (req, res) => JSON.stringify(req.body));

app.use(
  morgan(":method :url :status :res[content-length] :response-time ms :body")
);

app.get("/api/products", (request, response) => {
  Product.find({}).then((products) => {
    response.json(products);
  });
});

app.get("/api/products/:id", (request, response, next) => {
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

app.get("/api/cartitems", (request, response) => {
  CartItem.find({}).then((products) => {
    response.json(products);
  });
});

app.get("/api/cartitems/:id", (request, response, next) => {
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

app.post("/api/cartitems", (request, response, next) => {
  const body = request.body;

  const cartItem = new CartItem({
    name: body.name,
    price: body.price,
    quantity: body.quantity,
    category: body.category,
    imgPath: body.imgPath,
    imgPreview: body.imgPreview,
    productPreview: body.productPreview,
  });

  cartItem
    .save()
    .then((savedItem) => {
      response.json(savedItem.toJSON());
    })
    .catch((error) => next(error));
});

app.delete("/api/cartitems/:id", (request, response) => {
  CartItem.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
