import mongoose from "mongoose";

const RetreatSchema = new mongoose.Schema({
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
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },

  cheapestPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Retreat", RetreatSchema);
