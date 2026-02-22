import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  console.log("👉 REGISTER HIT");
  console.log("👉 BODY:", req.body);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Register failed" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  console.log("👉 LOGIN HIT");
  console.log("👉 BODY:", req.body);

  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Admin logic
    if (email === "admin@soulstore.com") {
      foundUser.role = "admin";
      await foundUser.save();
    }

    res.json({
      message: "Login success",
      user: {
        id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
