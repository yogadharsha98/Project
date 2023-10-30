import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    
  },
  arrivaltime: {
    type: String,
    required: true,
  },
  departuretime: {
    type: String,
    required: true,
  },
  reachtime: {
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

export default mongoose.model("Flight", FlightSchema);
