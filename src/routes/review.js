const {
  getReviewById,
  addNewReview,
  deleteReview,
  updateReview,
  getProductReviews,
} = require("../controllers/review");
const asyncHandler = require("../middlewares/asyncHandler");
const validateReviewOwner = require("../middlewares/validateReviewOwner");
const {
  verifyAdmin,
  verifyUser,
} = require("../middlewares/verifyUserAndAdmin");

const reviewRouter = require("express").Router();

reviewRouter.get("/:productId", asyncHandler(getProductReviews));
reviewRouter.post("/", verifyUser, asyncHandler(addNewReview));
reviewRouter.delete(
  "/:id",
  verifyUser,
  asyncHandler(validateReviewOwner),
  asyncHandler(deleteReview)
);
reviewRouter.put(
  "/:id",
  verifyUser,
  asyncHandler(validateReviewOwner),
  asyncHandler(updateReview)
);
reviewRouter.get("/:id", asyncHandler(getReviewById));
module.exports = reviewRouter;
