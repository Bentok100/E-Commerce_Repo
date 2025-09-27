import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONOGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(`Database error :=  ${error}`);
  }
};

export default connectDb;
