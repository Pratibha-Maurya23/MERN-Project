import express from "express";
import { Event } from "../models/Event.js";
import { protect, isOrganizer } from "../middleware/auth.js";

const router = express.Router();

// Public: get all
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Organizer: create
router.post("/", protect, isOrganizer, async (req, res) => {
  const event = await Event.create({
    ...req.body,
    organizer_id: req.user.id,
  });
  res.json(event);
});

// Organizer: update
router.put("/:id", protect, isOrganizer, async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(event);
});

// Organizer: delete
router.delete("/:id", protect, isOrganizer, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
