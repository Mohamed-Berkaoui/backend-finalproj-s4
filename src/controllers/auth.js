const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const { AppSuccess, AppFail } = require("../utils/AppResponces");

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
  res.status(201).json(new AppSuccess(newUser));
}

async function login(req, res) {
  const { email, password } = req.body;
  const existuser = await userModel.findOne({ email: email });
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
