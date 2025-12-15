const categoryRouter = require("express").Router();
const {
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCatgory,
  addNewCategory,
} = require("../controllers/category");
const asyncHandler = require("../middlewares/asyncHandler");
const { verifyAdmin } = require("../middlewares/verifyUserAndAdmin");
categoryRouter.get("/", asyncHandler(getAllCategories));
categoryRouter.post("/", verifyAdmin, asyncHandler(addNewCategory));
categoryRouter.get("/:id", asyncHandler(getCategoryById));
categoryRouter.delete("/:id", verifyAdmin, asyncHandler(deleteCategory));
categoryRouter.put("/:id", verifyAdmin, asyncHandler(updateCatgory));

module.exports = categoryRouter;
