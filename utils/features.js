import jwt  from "jsonwebtoken";


export const sendCoockie = (user , res , message , statuscode = 200) => {
    const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);
  
    res
      .status(statuscode)
      .cookie("token", token, {
        httponly: true,
        maxAge: 1000 * 60 * 15,
      })
      .json({
        success: true,
        message,
      });
};