import mongoose from "mongoose";
import Authrouter from "../routers/user.js";
import router from "../routers/task.js";

const AuthorSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Birthdate: {
    type: String,
  },
});

export default mongoose.model("Author", AuthorSchema);
