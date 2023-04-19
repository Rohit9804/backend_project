import {app} from "./app.js"
import { connectDB } from "./data/database.js";

connectDB();
//server
app.listen(process.env.PORT, () => {
    console.log(`server is working on port:${process.env.PORT} IN ${process.env.NODE_ENV} Mode`);
});