const express = require("express");
//require("./config/database");

const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

//use this middleware for all request which convert json to js object
app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new instance of the user model
  const user = new User(req.body);

  try{
    await user.save();
    res.send("User added successfully!");
  } catch (err){
    res.status(400).send("Error saving the user" + err.message);
  }
})

//get user by email by find one method -> it returns the first created user as object
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try{
    const user = await User.findOne({emailId: userEmail});
    if(!user ){
      res.status(404).send("User not found");
    }else{
      res.send(user);
    }
  }catch(err){
    res.status(400).send("Something went wrong");
  }
});
//get user by email by find  method -> it return all users as array
app.get("/users", async (req, res) => {
  const userEmail = req.body.emailId;
  try{
    const users = await User.find({emailId: userEmail});
    if(users.length === 0){
      res.status(404).send("User not found");
    }else{
      res.send(users);
    }
  }catch(err){
    res.status(400).send("Something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

// Detele a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    //const user = await User.findByIdAndDelete(userId);

    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

// Update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Update Failed: " + err.message);
  }
});

// Update data of the user by put
app.put("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});


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

