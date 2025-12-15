const categoryModel = require('../models/category')
const { AppSuccess, AppFail } = require("../utils/AppResponces");

async function addNewCategory(req, res) {
  const newCategory = await categoryModel.insertOne(req.body);
  res.status(201).json(new AppSuccess(newCategory));
}

async function getAllCategories(req, res) {
  const categories = await categoryModel.find();
  res.status(200).json(new AppSuccess(categories));
}
async function getCategoryById(req, res) {
  const category = await categoryModel.findById(req.params.id);
  res.status(200).json(new AppSuccess(category));
}

///product/delete/:id
async function deleteCategory(req, res) {
  const deletedCategory = await categoryModel.deleteOne({ _id: req.params.id });
  if (!deletedCategory) {
    res.status(400).json(new AppFail("category not found"));
    return;
  }
  res.status(200).json(new AppSuccess(deletedCategory));
}
///product/update/:id
async function updateCatgory(req, res) {
  const updatedCategory = await categoryModel.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    { returnDocument: "after" }
  );
  if (!updatedCategory) {
    res.status(400).json(new AppFail("category not found"));
    return;
  }
  res.status(200).json(new AppSuccess(updatedCategory));
}

module.exports = { addNewCategory,getAllCategories,getCategoryById, deleteCategory, updateCatgory };
