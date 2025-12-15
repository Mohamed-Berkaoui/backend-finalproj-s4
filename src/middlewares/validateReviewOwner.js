const reviewModel = require("../models/review")
const { AppFail } = require("../utils/AppResponces")

  async function validateReviewOwner(req, res, next) {
    const review=await reviewModel.findOne({_id:req.params.id})
    if(!review){
        res.status(400).json(new AppFail('review not found'))
    }
    if(req.user._id!=review.user ){
            res.status(400).json(new AppFail('unautorized'))
    }
    next()
  }

  module.exports=validateReviewOwner