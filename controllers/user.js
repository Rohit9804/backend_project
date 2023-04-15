import { User } from "../models/user.js"

export const getAllUsers = async (req,res)=>{
    const users =  await User.find({});
     res.json({
         success: true,
         users,
     });
 }

export const register = async (req , res)=>{
    const { name ,email ,password } = req.body;
     await User.create({
        name ,email ,password
    })
     res.json({
         success: true,
         message : "registered"
     });
 }

export const getUserDetails = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
        success : true,
        user,
    });
 }

export const updateUser = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
        success : true,
        message: "updated",
    });
 }
 export const deleteUser = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    await user.remove();

    res.json({
        success : true,
        message: "deleted",
    });
 }