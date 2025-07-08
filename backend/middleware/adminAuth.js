import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    //next is callback function
    try{
      //get token from user request header

      const { token } = req.headers;
      //if token is available then admin can continue , else user is unauthorized to access api
      if(!token){
        //exec will stop after below statement
        return res.json({status: false, message : "Not authorized to access this api"});        
      }
      //if token is available , decode the token

      const token_decode = jwt.verify(token , process.env.JWT_SECRET);
      //we defined token as email + password
      if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
         return res.json({status: false, message : "Not authorized to access this api"});        
      }
      //if token is matched with email + password then call next callback func
      next();
    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message});

    }
}

export default adminAuth;