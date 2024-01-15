import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../database/models/User";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Fetch user data from the database based on user ID obtained from the token
    const user = await User.findByPk(decoded.user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the token in the database matches the token used for the request
    if (user.activeToken !== token) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    // Check for token expiration
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTimestamp) {
      return res.status(401).json({ error: "Unauthorized: Token expired" });
    }

    // Attach the decoded user information to the request object for further use
    req.body.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
