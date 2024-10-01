const mongoose = require("mongoose");

//Create a userSchema & user Model
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
      },
      password: {
        type: String,
      },
      age: {
        type: Number,
      },
      gender: {
        type: String,
      },
});
    
module.exports = mongoose.model("User", userSchema);
