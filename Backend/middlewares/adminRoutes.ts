import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";
config();

export function adminRoutes(req: Request, res: Response, next: Function) {
  const token = req.header("authtoken");
  if (!token) return res.status(401).json("Access denied");
  try {
    const verified = verify(token, process.env.JWT_SECRET!) as { role: string };
    if (!verified) return res.status(401).json("Access denied");
    const isAdmin = verified.role === "admin";
    if (!isAdmin)
      return res
        .status(401)
        .json("You do not have permissions to access this route");
    if (isAdmin) {
      next();
    }
  } catch (error) {
    res.status(400).json("Invalid token");
  }
}
