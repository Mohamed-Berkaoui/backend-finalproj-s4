const {
  getAllProducts,
  getProductById,
  addNewProduct,
  deleteProduct,
  updateProduct,
  getTopRatedProducts,
} = require("../controllers/product");
const asyncHandler = require("../middlewares/asyncHandler");
const { verifyAdmin } = require("../middlewares/verifyUserAndAdmin");

const productRourter = require("express").Router();

productRourter.get("/", asyncHandler(getAllProducts));
productRourter.get("/top-rated", asyncHandler(getTopRatedProducts));
productRourter.post("/", verifyAdmin, asyncHandler(addNewProduct));
productRourter.delete("/:id", verifyAdmin, asyncHandler(deleteProduct));
productRourter.put("/:id", verifyAdmin, asyncHandler(updateProduct));
productRourter.get("/:id", asyncHandler(getProductById));
module.exports = productRourter;
