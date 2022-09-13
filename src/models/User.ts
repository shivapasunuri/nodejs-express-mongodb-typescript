import { Schema, model } from "mongoose";
import UserInterface from "../interfaces/User.interface";
const userSchema: Schema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
  },
  { timestamps: true }
);

export default model<UserInterface>("User", userSchema);
