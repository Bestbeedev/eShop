const jwt = require("jsonwebtoken")

const verifyAdmin=async(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Access denied, No token provided"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_KEYS);
        if(decoded.role !=='admin'){
            return res
              .status(403)
              .json({ message: "Access denied,Admin required" });
        }
        req.user=decoded
        next()

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server error",err:err.message})
    }
}

module.exports={verifyAdmin}