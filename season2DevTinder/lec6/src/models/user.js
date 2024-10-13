const mongoose = require("mongoose");

//Create a userSchema & user Model
const userSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        min: 18,
      },
      gender: {
        type: String,
        validate(value){
          if(!["male", "female", "others"].includes(value)){
            throw new Error("Gender data is not valid!");
          }
        }
      },
      photoUrl: {
        type: String,
        default: "https://geographyandyou.com/images/user-profile.png",
      },
      about: {
        type: String,
        default: "This is a default about of the user!",
      },
      skills: {
        type: [String],
      },
  },
  //by adding this object automatic createdate and updatedate time will get update in db
  {
    timestamps: true,
  }
);
    
module.exports = mongoose.model("User", userSchema);
