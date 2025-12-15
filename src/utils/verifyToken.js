const jwt=require('jsonwebtoken')
function verifyToken(token){
    try {
        const decode=jwt.verify(token,"gomycode")
        return decode
        
    } catch (error) {
        return null
    }
}
module.exports=verifyToken