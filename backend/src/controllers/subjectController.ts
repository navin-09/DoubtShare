import { Request, Response } from "express";
import DoubtSubjects from "../database/models/DoubtSubject";
import DoubtRequests from "../database/models/DoubtRequests";

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const Subjects = await DoubtSubjects.findAll();
    // Send user details (excluding password) along with the token
    res.json({ Subjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postDoubt = async (req: Request, res: Response) => {
  try {
    const { subjectId, question, studentId } = req.body;

    // Assuming you have a DoubtRequests model and want to save the question
    const newDoubtRequest = await DoubtRequests.create({
      student_id: studentId, // Assuming student_id is the column for student ID
      subject_id: subjectId,
      question: question,
      status: "pending",
      // Other columns as needed
    });

    // Respond with the newly created doubt request
    res.status(201).json({ doubtRequest: newDoubtRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
