const express = require("express");
const { register, login } = require("./controllers/auth");
const asyncHandler = require("./middlewares/asyncHandler");
const connectToDb = require("./utils/connectTodb");
const { AppError } = require("./utils/AppResponces");
const app = express();
app.use(express.json());

app.post("/api/v1/user/register", asyncHandler(register));
app.post("/api/v1/user/login", asyncHandler(login));


//error handler

app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).json(new AppError(error.message));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
