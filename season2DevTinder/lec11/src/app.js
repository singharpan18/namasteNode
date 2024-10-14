const express = require("express");
//require("./config/database");

const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const cookieParser = require("cookie-parser");

//use this middleware for all request which convert json to js object
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);


connectDB().then(() => {
    console.log("Database connection established....");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });    
})
.catch((err) => {
    console.log("Database cannot be connected...");
});


