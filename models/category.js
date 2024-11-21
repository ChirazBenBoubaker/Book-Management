import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  Name: {
    type: String,
    enum: ["Horror", "Mistrey"],
  },
});

export default mongoose.model("Category", CategorySchema);
