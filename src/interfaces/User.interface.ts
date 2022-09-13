import { Document } from "mongoose";

export default interface UserInterface extends Document {
  firstname: String;
  lastname: String;
  email: String;
}
