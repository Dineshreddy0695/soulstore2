import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT DATABASE
connectDB();

// ROUTES
app.use("/api/auth", authRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
