const userModel = require("../models/user");
const { AppFail } = require("../utils/AppResponces");
const verifyToken = require("../utils/verifyToken");

async function verifyAuth(token) {
  if (!token) {
    return null;
  }
  const decode = verifyToken(token);
  if (!decode) {
    return null;
  }
  const user = await userModel.findById(decode.id);
  if (!user) {
    return null;
  }
  return user;
}

async function verifyUser(req, res, next) {
  const token = req.headers.Authorization || req.headers.authorization;
  const user = await verifyAuth(token);
  if (!user) {
    return res.status(403).json(new AppFail("unauthorizedrr"));
  }
  req.user = user;
  next();
}

async function verifyAdmin(req, res, next) {
  const token = req.headers.Authorization || req.headers.authorization;
  const user =await verifyAuth(token);
  if (!user || user.role != "admin") {
    return res.status(403).json(new AppFail("unauthorized"));
  }
  req.user = user;
  next();
}

module.exports={verifyAdmin,verifyUser}