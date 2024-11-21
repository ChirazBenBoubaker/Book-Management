import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import validator from 'validator';


const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate : [validator.isEmail, "invalid email"]
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
userSchema.plugin(uniqueValidator);

export default mongoose.model("User", userSchema);
