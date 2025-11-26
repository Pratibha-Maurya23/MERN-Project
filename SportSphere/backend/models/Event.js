import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    organizer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    sport_type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    venue: {
      type: String,
      required: true,
    },

    event_date: {
      type: Date,
      required: true,
    },

    image_url: {
      type: String,
    },

    max_participants: {
      type: Number,
      default: 50,
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);
