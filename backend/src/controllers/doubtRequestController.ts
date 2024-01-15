import { Request, Response } from "express";
import bcrypt from "bcrypt";
import DoubtRequests from "../database/models/DoubtRequests";

export const doubtRequest = async (req: Request, res: Response) => {
  try {
    const {} = req.body;
    const doubtRequests = await DoubtRequests.create({});
    res.json({ doubtRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
