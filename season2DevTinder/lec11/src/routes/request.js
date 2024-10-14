const express = require("express");
const requestRouter = express.Router();

const {userAuthNew} = require("../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuthNew, async (req, res) => {
    const user = req.user;
    // Sending a connection request
    console.log("Sending a connection request");
  
    res.send(user.firstName + "sent the connect request!");
  });

module.exports = requestRouter;  