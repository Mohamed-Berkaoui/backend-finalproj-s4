const express = require("express");
const connectToDb = require("./utils/connectTodb");
const { AppError } = require("./utils/AppResponces");
const authRouter=require('./routes/auth');
const categoryRouter = require("./routes/category");
const productRourter = require("./routes/product");
const reviewRouter = require("./routes/review");
const orderRouter = require("./routes/order");
var cors = require('cors')


const app = express();
//api/v1/user/register  //post
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))
app.use(express.json());
// auth
app.use('/api/v1/user',authRouter)
//category
app.use("/api/v1/category",categoryRouter)

//product
app.use('/api/v1/product',productRourter)

//review
app.use("/api/v1/review", reviewRouter);

//order
app.use("/api/v1/order", orderRouter);

app.use(function (error, req, res, next) {
  console.log(error);
  res.status(500).json(new AppError(error.message));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
