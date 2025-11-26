import express from "express";
import { Enrollment } from "../models/Enrollment.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const enrollment = await Enrollment.create({
    event_id: req.body.event_id,
    player_id: req.user.id,
  });
  res.json(enrollment);
});

router.get("/me", protect, async (req, res) => {
  const data = await Enrollment.find({ player_id: req.user.id });
  res.json(data);
});

export default router;
