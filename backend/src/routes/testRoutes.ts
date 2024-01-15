import express from "express";
import { getHelloWorld } from "../controllers/testController";
const router = express.Router();

// Define routes
router.get("/", getHelloWorld);

export default router;
