import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import eventRoutes from "./routes/event.routes.js";
import enrollRoutes from "./routes/enrollment.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/events", eventRoutes);
app.use("/enrollments", enrollRoutes);

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
