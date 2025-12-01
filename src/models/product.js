const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "there is no description" },
    category: { type: mongoose.Types.ObjectId, ref: "category" },
    image:{type:String,default:"https://picsum.photos/200/300"},
    price: { type: Number },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "published",
    },
    quantity: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const productModel=mongoose.model("product",productSchema)
module.exports = productModel;
