import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Profile } from "../models/Profile.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { email, password, full_name, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await Profile.create({
    email,
    full_name,
    role,
    password: hashed,
  });

  res.json({ message: "User created" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Profile.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token, user });
});

export default router;
