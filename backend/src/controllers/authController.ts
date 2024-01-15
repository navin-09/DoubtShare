import { Request, Response } from "express";
import User from "../database/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, class_grade, language } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      class_grade,
      language,
    });

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

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

    // Save the token in the activeToken column of the Users table
    await user.update({ activeToken: token });
    const { password: any, ...userWithoutPassword } = user.toJSON();

    // Send user details (excluding password) along with the token
    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserData = async (req: Request, res: Response) => {
  try {
    // req.user contains the decoded information from the JWT token
    const userDetails = req.body.user;

    if (!userDetails) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ userDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
