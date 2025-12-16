const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const { AppSuccess, AppFail } = require("../utils/AppResponces");
const verificationUserModel = require("../models/verificationUser");
const sendMail = require("../utils/mailer");
const crypto=require('crypto')
async function register(req, res) {
  const { name, email, password } = req.body;
  const existuser = await userModel.findOne({ email: email });
  if (existuser) {
    return res.status(400).json(new AppFail("user Already exist"));
  }
  const hashedPasswoed = bcrypt.hashSync(password, 10);
  const newUser = await userModel.insertOne({
    name,
    email,
    password: hashedPasswoed,
  });
  const hash=crypto.randomBytes(32).toString("hex");
  const newVerificationUser=await verificationUserModel.insertOne({
    userId:newUser._id,
    hash:hash,
  })

  //send verification email
  await sendMail(newUser.email,newUser._id,hash);
 

  res.status(201).json(new AppSuccess(newUser));
}

async function login(req, res) {
  const { email, password } = req.body;
  const existuser = await userModel.findOne({ email: email,status:"active" });
  if (!existuser) {
    return res.status(400).json(new AppFail("somthing went wrong"));
  }
  const isCorrectPassword = bcrypt.compareSync(password, existuser.password);
  if (!isCorrectPassword) {
    return res.status(400).json(new AppFail("somthing went wrong"));
  }

  const token = generateToken(existuser._id);
  res.status(200).json(new AppSuccess(token));
}



module.exports = { register,login  };
