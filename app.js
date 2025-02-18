// app.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const taskRoutes = require("./routes/task.js");
const { connectDB } = require("./config/database.js");

require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
