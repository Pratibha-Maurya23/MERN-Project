import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    player_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },

    enrolled_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

// Prevent duplicate enrollments in the same event
enrollmentSchema.index({ event_id: 1, player_id: 1 }, { unique: true });

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
