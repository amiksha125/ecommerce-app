import userModel from "../models/userModel";
import validator from 'validator';
//Route for user login
const loginUser = async (req, res) => {

}

//Route for user registration
const registerUser = async (req, res) => {
     
    //res.json({msg: "Register API working"})
    try{
       //get name, email, password from req.body
       const {name, email, password} = req.body;

       //checking user already exists or not

       const exists = await userModel.findOne({email})

       if(exists){
         return res.json({success: false, msg: "user already exists"})
       }

       // validating email format and strong password
       if(!validator.isEmail(email)){
         return res.json({success: false, msg: "please enter a valid email"})
       }

       if(password.length < 8){
         return res.json({success: false, msg: "please enter a string password"})
       }

       //If i reach here means email & password are valid , create account now
       
    }catch(err){

    }

}

//Route for admin login
const adminLogin = async(req, res) => {

}
export {loginUser, registerUser, adminLogin}