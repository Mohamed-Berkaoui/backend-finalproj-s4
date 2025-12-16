const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, requied: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "moderator", "admin"], default: "user" },
  status:{type:String,enum:["active","suspended","pending"],default:"pending"},
  
},{timestamps:true,versionKey:false});

const userModel=mongoose.model("user",userSchema)
module.exports=userModel