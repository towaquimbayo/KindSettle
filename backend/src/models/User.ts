import { Schema, model } from "ottoman";
import { connectDB } from "../db/connect";

const start = async () => {
  try {
    await connectDB({
      connectionString: process.env.CB_URI,
      bucketName: process.env.CB_BUCKET,
      username: process.env.CB_USERNAME,
      password: process.env.CB_PASSWORD,
    });
  } catch (err) {
    console.log(err);
  }
};

start();

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  email: {
    type: String,
    required: true,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    maxLength: 1024, //store hashes
    minLength: 6,
  },
  dob: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  monthlyIncome: {
    type: Number,
  },
  spouse: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", UserSchema, {
  collectionName: "users",
  scopeName: "admin",
});

export default User;
