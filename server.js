import {app} from "./app.js"
import { connectDB } from "./data/database.js";

connectDB();
//server
app.listen(process.env.PORT, () => {
    console.log("server is running");
});