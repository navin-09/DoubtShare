import express from "express";
import authRoutes from "./authRoutes";
import testRouter from "./testRoutes";
import subjectsRoutes from "./subjectsRoutes";
const router = express.Router();

router.use("/", testRouter);
router.use("/auth", authRoutes);
router.use("/", subjectsRoutes);

export default router;
