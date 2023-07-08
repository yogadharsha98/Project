import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },

  cheapestPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Event", EventSchema);
