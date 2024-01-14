import { Request, Response } from "express";
import User from "../database/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  console.log("registerstration started....");
  try {
    console.log(req.body);
    const { name, email, password, role, class_grade, language } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      class_grade,
      language,
    });
    console.log(user);

    const token = jwt.sign(
      { user_id: user.user_id, email },
      process.env.JWT_SECRET!
    );

    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signin = async (req: Request, res: Response) => {
  console.log("login started....");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid Email or Password" });
    }

    const token = jwt.sign(
      { user_id: user.user_id, email },
      process.env.JWT_SECRET!
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
