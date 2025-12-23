const mongoose=require('mongoose')


const orderSchema= new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user"},
    items:[{product:{type:mongoose.Types.ObjectId,ref:"product"},quantity:Number,_id:false}],// [{product:mfmlfdmslk,quantity:2},{product:"sdfsfs",quantity:4}]
    total:{type:Number},
    paymentMethod:{type:String,enum:["onDelivery","paypal"]},
    status:{type:String,enum:["pending","fulfilled","cancelled"],default:"pending"}
})
const orderModel=mongoose.model("order",orderSchema)
 
module.exports=orderModel