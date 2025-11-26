import express from "express";
import { Profile } from "../models/Profile.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", protect, async (req, res) => {
  const user = await Profile.findById(req.user.id);
  res.json(user);
});

router.put("/me", protect, async (req, res) => {
  const updated = await Profile.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

export default router;
