import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://josepuiggrost:t6nrhCVN*Z8!!H-@cluster0.pe3sj.mongodb.net/";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};
