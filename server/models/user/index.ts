import mongoose, { Schema, Document, CallbackError } from "mongoose";
import bcrypt from "bcrypt";
import { BlogType } from "../blog";

const SALT_WORK_FACTOR = 10;

export interface UserType extends Document {
  username: string;
  password: string;
  name: string;
  lastName: string;
  validatePassword(password: string): Promise<boolean>;
  blog: BlogType[];
}

const userSchema: Schema<UserType> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err as CallbackError);
  }
});

userSchema.methods.validatePassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

export const UserModel = mongoose.model<UserType>("users", userSchema);
