const express = require("express");
//require("./config/database");

const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  //creating a new instance of the user model
  const user = new User({
    firstName: "ak",
    lastName: "Singh",
    emailId: "arpan@singh.com",
    password: "Arpan@123"
  });

  try{
    await user.save();
    res.send("User added successfully!");
  } catch (err){
    res.status(400).send("Error saving the user" + err.message);
  }
})

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

