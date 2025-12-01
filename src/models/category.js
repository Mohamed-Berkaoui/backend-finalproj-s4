const mongoose=require('mongoose')


const categorySchema=new mongoose.Schema({

    name:{type:String,required:true},
    description:{type:String,default:"no description"}
},{versionKey:false})

const categoryModel=mongoose.model("category",categorySchema)

module.exports=categoryModel
