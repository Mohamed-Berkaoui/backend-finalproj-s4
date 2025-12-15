const productModel = require("../models/product");
const { AppSuccess, AppFail } = require("../utils/AppResponces");

async function addNewProduct(req, res) {
  const newProduct = await productModel.insertOne(req.body);
  res.status(201).json(new AppSuccess(newProduct));
}

async function getAllProducts(req, res) {
  const product = await productModel.find();
  res.status(200).json(new AppSuccess(product));
}

async function getTopRatedProducts(req, res) {
  const product = await productModel.find().limit(4);
  res.status(200).json(new AppSuccess(product));
}
async function getProductById(req, res) {
  const product = await productModel.findById(req.params.id);
  res.status(200).json(new AppSuccess(product));
}

///product/delete/:id
async function deleteProduct(req, res) {
  const deletedProduct = await productModel.deleteOne({ _id: req.params.id });
  if (!deletedProduct) {
    res.status(400).json(new AppFail("product not found"));
    return;
  }
  res.status(200).json(new AppSuccess(deletedProduct));
}
///product/update/:id
async function updateProduct(req, res) {
  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    { returnDocument: "after" }
  );
  if (!updatedProduct) {
    res.status(400).json(new AppFail("product not found"));
    return;
  }
  res.status(200).json(new AppSuccess(updatedProduct));
}

module.exports = { addNewProduct,getTopRatedProducts,getAllProducts,getProductById, deleteProduct, updateProduct };
