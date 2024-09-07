import mongoose from "mongoose";

async function connectDB(){
  return await mongoose.connect(String(process.env.DATABASE_URL)).then(() => {
    console.log("Connected to database");
  }).catch(err => {
    console.log("Error connecting to database");
    console.log(err);
  })
}

export default connectDB;