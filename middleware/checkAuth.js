import  Jwt from "jsonwebtoken";
const checkAuth=async(req,res,next)=>{

try {
    const token=req.headers.authorization;
    
  const varify=Jwt.verify(token,'this is dummy text')
  next();
} catch (error) {
    res.status(400).json({
        message:"invalid token"
    })
}

}
export default checkAuth;
// module.exports=checkAuth