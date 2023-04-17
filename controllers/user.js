import { User } from "../models/user.js"
import bcrypt from "bcrypt";
import { sendCoockie } from "../utils/features.js";


export const getAllUsers = async (req,res)=>{};



// login user
export const login = async (req , res) => {
const  { email , password} = req.body;

const user = await User.findOne({ email }).select("+password");
if (!user) {
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });
  }
 const isMatch = await bcrypt.compare(password, user.password)
 if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });
  }
  sendCoockie(user,res,`welcome back, ${user.name}`,200)
};



// register user
export const register = async (req, res) => {
    const { name, email, password } = req.body;
  
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({
        success: false,
        message: "user already exists",
      });
    };
    const hashedpassword = await bcrypt.hash(password, 10);
  
    user = await User.create({ name, email, password: hashedpassword });
    sendCoockie( user, res, "registered successfully", 201)
  };
  


//get user data
export const getMyProfile = (req , res) => {
  res.status(200).json({
    success : true,
    user : req.user,
  });
};


export const logout = ( req , res) => {
  res.status(200).cookie("token" , "", {expires : new Date(Date.now())}).json({
    success : true,
    user : req.user,
  });
}