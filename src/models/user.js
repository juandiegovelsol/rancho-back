import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  status: Boolean,
});

const User = mongoose.model("User", UserSchema);

export default User;
