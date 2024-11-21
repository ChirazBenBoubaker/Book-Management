import mongoose from "mongoose";
import Authrouter from "../routers/user.js";
import idValidator from "mongoose-id-validator";
import Joi from "joi";



const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }] ,
});

taskSchema.plugin(idValidator)

export default mongoose.model("Task", taskSchema);
