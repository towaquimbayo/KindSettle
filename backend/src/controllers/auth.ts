import { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { messages } from "../messages/lang/en/user";

export const registerUser = async (req: Request, res: Response) => {
  type RequestBody = {
    name: string;
    email: string;
    password: string;
  };

  const { name, email, password }: RequestBody = req.body;
  try {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // store the user in db
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      created: new Date(),
    });
    await user.save();

    res.send({ user: user.id });
  } catch (err) {
    res.status(400).send(err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  if (!req.userId) {
    console.error("User ID not provided. Please try again.");
    res.status(400).send({
      message: messages.userNotFound,
    });
    return;
  }

  const user = await User.findById(req.userId);
  if (!user) {
    console.error("User not found for the provided email. Please try again.");
    res.status(400).send({
      message: messages.userNotFound,
    });
    return;
  }

  // Create and assign a JWT
  const token = jwt.sign({ id: req.userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  res.header("Authorization", `Bearer ${token}`);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    domain: "localhost",
    sameSite: "none",
  });
  res.send({
    status: 200,
    message: messages.userLoginSuccess,
    name: user.name,
    email: user.email,
  });
};
