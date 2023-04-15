import  express  from "express";
import { getAllUsers, register, getMyProfile, login} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.post("/login", login);

router.get("/me", getMyProfile);

// router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

export default router