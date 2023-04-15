import express, { json } from "express";
import  userRouter  from "./routes/user.js"
import { config } from "dotenv";

config({
    path: "./data/config.env",
});

export const app = express();
app.use(userRouter);

//middleware
app.use(express.json())
app.use("/users", userRouter)

