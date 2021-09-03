const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const pool = require("../db");

// create a user
loginRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    const passwordCorrect =
      user.rows[0] === null
        ? false
        : await bcrypt.compare(password, user.rows[0].passwordhash);

    if (!(user.rows[0] && passwordCorrect)) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    }

    const userForToken = {
      username: user.rows[0].username,
      id: user.rows[0].id,
    };

    // token expires in 60*60 seconds, that is, in one hour
    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 60,
    });

    res.status(200).send({
      token,
      username: user.rows[0].username,
      firstname: user.rows[0].firstname,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = loginRouter;
