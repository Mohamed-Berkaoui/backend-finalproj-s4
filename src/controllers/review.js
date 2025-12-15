const reviewModel = require("../models/review");
const { AppSuccess, AppFail } = require("../utils/AppResponces");

async function addNewReview(req, res) {
  const newReview = await reviewModel.insertOne({...req.body,user:req.user._id});
  res.status(201).json(new AppSuccess(newReview));
}

async function getProductReviews(req, res) {
  const reviews = await reviewModel.find({ productId: req.params.productId });
  res.status(200).json(new AppSuccess(reviews));
}
async function getReviewById(req, res) {
  const review = await reviewModel.findById(req.params.id);
  res.status(200).json(new AppSuccess(review));
}

///review/delete/:id
async function deleteReview(req, res) {
  const deletedReview = await reviewModel.deleteOne({ _id: req.params.id });
  if (!deletedReview) {
    res.status(400).json(new AppFail("review not found"));
    return;
  }
  res.status(200).json(new AppSuccess(deletedReview));
}
///review/update/:id
async function updateReview(req, res) {
  const updatedReview = await reviewModel.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    { returnDocument: "after" }
  );
  if (!updatedReview) {
    res.status(400).json(new AppFail("review not found"));
    return;
  }
  res.status(200).json(new AppSuccess(updatedReview));
}

module.exports = { addNewReview,getProductReviews,getReviewById, deleteReview, updateReview };