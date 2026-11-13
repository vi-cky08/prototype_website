import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import connectDB from "../config/db.js";
import User from "../models/User.js";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const run = async () => {
  try {
    await connectDB();

    const existingSuperAdmin = await User.findOne({
      role: "superadmin",
    });

    if (existingSuperAdmin) {
      console.log("Super Admin already exists.");
      return;
    }

    console.log("\nCreate Initial Super Admin Account\n");

    const fullName = await rl.question("Full Name: ");
    const email = await rl.question("Email: ");
    const password = await rl.question("Password (min 12 characters): ");

    if (
      !fullName.trim() ||
      !email.trim() ||
      password.length < 12 ||
      password.length > 72
    ) {
      throw new Error("Please provide valid details and password.");
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingEmail = await User.findOne({
      email: normalizedEmail,
    });

    if (existingEmail) {
      throw new Error("This email is already registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role: "superadmin",
      status: "approved",
      isActive: true,
    });

    console.log("\nSuper Admin created successfully.");
    console.log("Email:", normalizedEmail);
    console.log("Password: Saved securely as a hash in MongoDB.");

  } catch (error) {
    console.error("Setup failed:", error.message);
    process.exitCode = 1;

  } finally {
    rl.close();
    await mongoose.disconnect();
  }
};

run();