import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://dineshreddy8641_user:dinesh123@soulstore-db1.nkjejqx.mongodb.net/soulstore?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error.message);
  }
};

export default connectDB;
