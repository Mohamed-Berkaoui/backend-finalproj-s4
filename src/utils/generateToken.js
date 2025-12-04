const jwt=require('jsonwebtoken')
function generateToken(id){
    const token=jwt.sign({id:id},"gomycode",{expiresIn:"3h"})
    return token
}

module.exports=generateToken