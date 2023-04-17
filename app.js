import express, { json } from "express";
import  userRouter  from "./routes/user.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config({
    path: "./data/config.env",
});

export const app = express();
app.use(userRouter);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter)

app.get("/", (req,res) => {
    res.send("nice working");
});
