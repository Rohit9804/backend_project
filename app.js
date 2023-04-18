import express, { json } from "express";
import  userRouter  from "./routes/user.js"
import  taskRouter  from "./routes/task.js"
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


//using routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)

app.get("/", (req,res) => {
    res.send("nice working");
});
