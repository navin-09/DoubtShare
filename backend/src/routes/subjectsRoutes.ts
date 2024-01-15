import express from "express";
import { getAllSubjects, postDoubt } from "../controllers/subjectController";

const router = express.Router();

router.get("/getAllSubjects", getAllSubjects);
router.post("/postDoubt", postDoubt);
// api/postDoubt
export default router;
