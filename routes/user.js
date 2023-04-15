import  express  from "express";
import { getAllUsers, register, getUserDetails, updateUser, deleteUser} from "../controllers/user.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("hellop");
})
router.get("/all", getAllUsers);
router.post("/new", register);
router.get("/userid/:id", getUserDetails);
router.put("/userid/:id", updateUser);
router.delete("/userid/:id", deleteUser);

// router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

export default router