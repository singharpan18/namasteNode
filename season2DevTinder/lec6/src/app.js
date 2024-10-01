const express = require("express");
//require("./config/database");

const connectDB = require("./config/database");
const app = express();

connectDB().then(() => {
    console.log("Database connection established....");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });    
})
.catch((err) => {
    console.log("Database cannot be connected...");
});

// app.listen(7777, () => {
//   console.log("Server is successfully listening on port 7777...");
// });

