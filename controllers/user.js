import { User } from "../models/user.js"
import bcrypt from "bcrypt";
import { sendCoockie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";





// login user
export const login = async (req , res) => {
try {
  const  { email , password} = req.body;

const user = await User.findOne({ email }).select("+password");

if (!user) return next( new ErrorHandler("invalid email or password" , 400));

 const isMatch = await bcrypt.compare(password, user.password)
 
 if (!isMatch) return next( new ErrorHandler("invalid email or password" , 400));

  sendCoockie(user,res,`welcome back, ${user.name}`,200)
} catch (error) {
  next(error);
}
};



// register user
export const register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
    let user = await User.findOne({ email });

    if (user) return next( new ErrorHandler("user already exists" , 400));

    const hashedpassword = await bcrypt.hash(password, 10);
  
    user = await User.create({ name, email, password: hashedpassword });
    sendCoockie( user, res, "registered successfully", 201)
    } catch (error) {
      next(error);
    }
  };
  


//get user data
export const getMyProfile = (req , res) => {
  res.status(200).json({
    success : true,
    user : req.user,
  });
};


export const logout = ( req , res) => {
  res.status(200).cookie("token" , "", {
    expires : new Date(Date.now()),
    sameSite : process.env.NODE_ENV === "development" ? "lax": "none",
    secure : process.env.NODE_ENV === "development" ? false : true,
  })
  .json({
    success : true,
    user : req.user,
  });
}