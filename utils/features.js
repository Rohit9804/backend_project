import jwt  from "jsonwebtoken";


export const sendCoockie = (user , res , message , statuscode = 200) => {
    const token = jwt.sign({ _id: user._id }, process.env.jwtsecret);
  
    res
      .status(statuscode)
      .cookie("token", token, {
        httponly: true,
        maxAge: 1000 * 60 * 15,
        sameSite : process.env.NODE_ENV === "development" ? "lax": "none",
        secure : process.env.NODE_ENV === "development" ? false : true,
      })
      .json({
        success: true,
        message,
      });
};