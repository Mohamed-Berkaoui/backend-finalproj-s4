const mongoose=require('mongoose')



const reviewSchema=new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user"},
    product:{type:mongoose.Types.ObjectId,ref:"product"},
    rating:{type:Number,min :1,max:5},
    comment:{type:String}
})


const   reviewModel=mongoose.model('review',reviewSchema)

module.exports=reviewModel