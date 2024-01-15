import express from "express";
import { signup, signin, getUserData } from "../controllers/authController";
import { verifyToken } from "../middleware/authenticateJWT";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/getUserDetails", verifyToken, getUserData);

export default router;
