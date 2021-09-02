const cartItemsRouter = require("express").Router();
const pool = require("../db");

// get all cartitems
cartItemsRouter.get("/", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM cartitems");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a specific cartitem
cartItemsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM cartitems WHERE id = $1", [
      id,
    ]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// create a cartitem
cartItemsRouter.post("/", async (req, res) => {
  try {
    const {
      name,
      price,
      quantity,
      category,
      imgpath,
      imgpreview,
      productpreview,
    } = req.body;
    const newCartItem = await pool.query(
      "INSERT INTO cartitems (name, price, quantity, category, imgpath, imgpreview, productpreview) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, price, quantity, category, imgpath, imgpreview, productpreview]
    );
    res.status(200).json(newCartItem.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// delete a cartitem
cartItemsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM cartitems WHERE id = $1", [id]);
    res.status(200).json("Item was deleted!");
  } catch (error) {
    console.log(error.message);
  }
});

// update a cartitem
cartItemsRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      quantity,
      category,
      imgPath,
      imgPreview,
      productPreview,
    } = req.body;
    const updatedCartItem = await pool.query(
      "UPDATE cartitems SET name = ($1), price = ($2), quantity = ($3), category = ($4), imgPath = ($5), imgPreview = ($6), productPreview = ($7) WHERE id = $8 RETURNING *",
      [name, price, quantity, category, imgPath, imgPreview, productPreview, id]
    );
    res.status(200).json(updatedCartItem.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = cartItemsRouter;
