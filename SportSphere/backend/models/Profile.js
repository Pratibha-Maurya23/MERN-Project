import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["player", "organizer"],
      required: true,
      default: "player",
    },

    phone: {
      type: String,
    },

    avatar_url: {
      type: String,
    },
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

export const Profile = mongoose.model("Profile", profileSchema);
