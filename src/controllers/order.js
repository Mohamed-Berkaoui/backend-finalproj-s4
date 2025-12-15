const orderModel = require("../models/product");
const { AppSuccess, AppFail } = require("../utils/AppResponces");

async function addNewOrder(req, res) {
  const newOrder = await orderModel.insertOne({...req.body,user:req.user._id});
  res.status(201).json(new AppSuccess(newOrder));
}

async function getAllOrders(req, res) {
  const order = await orderModel.find();
  res.status(200).json(new AppSuccess(order));
}
async function getOrderById(req, res) {
  const order = await orderModel.findById(req.params.id);
  res.status(200).json(new AppSuccess(order));
}

async function getUserOrders(req,res){
    const userOrders=await orderModel.find({user:req.user._id})
      res.status(200).json(new AppSuccess(userOrders));
}

///order/delete/:id
async function deleteOrder(req, res) {
  const deletedOrder = await orderModel.deleteOne({ _id: req.params.id });
  if (!deletedOrder) {
    res.status(400).json(new AppFail("order not found"));
    return;
  }
  res.status(200).json(new AppSuccess(deletedOrder));
}
///order/update/:id
async function updateOrder(req, res) {
  const updatedOrder = await orderModel.findByIdAndUpdate(
    req.params.id,
    { $set: { ...req.body } },
    { returnDocument: "after" }
  );
  if (!updatedOrder) {
    res.status(400).json(new AppFail("order not found"));
    return;
  }
  res.status(200).json(new AppSuccess(updatedOrder));
}

module.exports = { addNewOrder,getUserOrders,getAllOrders,getOrderById, deleteOrder, updateOrder };