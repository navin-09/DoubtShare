import express from "express";
import authRoutes from "./authRoutes";
import testRouter from "./testRouter";
const router = express.Router();

router.use("/", testRouter);
router.use("/auth", authRoutes);

export default router;
