const {
  getAllOrders,
  getOrderById,
  addNewOrder,
  deleteOrder,
  updateOrder,
  getUserOrders,
} = require("../controllers/order");
const asyncHandler = require("../middlewares/asyncHandler");
const {
  verifyAdmin,
  verifyUser,
} = require("../middlewares/verifyUserAndAdmin");

const orderRouter = require("express").Router();

orderRouter.get("/", verifyAdmin, asyncHandler(getAllOrders));
orderRouter.get("/", verifyUser, asyncHandler(getUserOrders));

orderRouter.post("/", verifyUser, asyncHandler(addNewOrder));
orderRouter.delete("/:id", verifyAdmin, asyncHandler(deleteOrder));
orderRouter.put("/:id", verifyAdmin, asyncHandler(updateOrder));
orderRouter.get("/:id", asyncHandler(getOrderById));
module.exports = orderRouter;
