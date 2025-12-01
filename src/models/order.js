const mongoose=require('mongoose')


const orderSchema= new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user"},
    items:[{product:{type:mongoose.Types.ObjectId,ref:"product"},qunatity:Number}],// [{product:mfmlfdmslk,quantity:2},{product:"sdfsfs",qunatity:4}]
    total:{type:Number},
    paymentMethod:{type:String,enum:["onDelevary","paypal"]},
    status:{type:String,enum:["pending","fulfilled","cancelled"]}
})

const orderModel=mongoose.model("order",orderSchema)

module.exports=orderModel