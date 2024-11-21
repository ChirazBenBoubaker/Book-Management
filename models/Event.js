import mongoose from "mongoose";

const EventSchema = mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  start: {
    type : Date ,
    required: true ,
  },
  end: {
    type : Date ,
    required: true ,
  }
});

export default mongoose.model("Event", EventSchema);
