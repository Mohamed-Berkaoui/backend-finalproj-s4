const { register, login } = require('../controllers/auth');
const asyncHandler = require('../middlewares/asyncHandler');

const authRouter=require('express').Router()
authRouter.post("/register", asyncHandler(register));
authRouter.post("/login", asyncHandler(login));

module.exports=authRouter