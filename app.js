const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cartItemsRouter = require("./routes_pg/cartitems");
const productsRouter = require("./routes_pg/products");
const productsRouterMD = require("./routes/products");
const userItemsRouter = require("./routes/useritems");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const reviewsRouter = require("./routes/reviews");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(middleware.tokenExtractor);

app.use("/api/cartitems", cartItemsRouter);
app.use("/api/products", productsRouter);
app.use("/api/productsm", productsRouterMD);
app.use("/api/useritems", userItemsRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);
app.use("/api/reviews", reviewsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
