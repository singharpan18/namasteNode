const express = require("express");
const profileRouter = express.Router();

const { userAuthNew } = require("../middlewares/auth");

profileRouter.get("/profile", userAuthNew, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;