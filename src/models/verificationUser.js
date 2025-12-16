const mongoose=require('mongoose')


const verificationUserSchema=new mongoose.Schema({

    userId:{type:mongoose.Types.ObjectId,ref:"user",required:true,unique:true},
    hash:{type:String,required:true},
 
},{versionKey:false})

const verificationUserModel=mongoose.model("verificationUser",verificationUserSchema)

module.exports=verificationUserModel