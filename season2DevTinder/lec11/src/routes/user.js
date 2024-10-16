const express = require("express");
const userRouter = express.Router();

const { userAuthNew } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

//get all the pending connection request for the loggedin user
userRouter.get("/user/requests/received", userAuthNew, async(req, res) => {
    try{
        const loggedInUser = req.user;

        const connectionRequests = await ConnectionRequest.find({
            toUserId: loggedInUser._id,
            status: "interested",
        }).populate(
            "fromUserId",
            "firstName lastName photoUrl age gender about skills"
        )

        res.json({
            message: "Data fetched successfully",
            data: connectionRequests,
        });
    }catch(err){
        res.statusCode(400).send("ERROR: " + err.message);
    }
});

module.exports = userRouter;