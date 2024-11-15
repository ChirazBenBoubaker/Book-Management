import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: string,
    required: true,
  },
  author: {
    type: string,
    required: true,
  },
  publication_year: {
    type: Number,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
  type: {
    type: [String],
    required: false,
  },
});

export default mongoose.model("Book", bookSchema);
