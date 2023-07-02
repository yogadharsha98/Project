import mongoose from "mongoose";

const FlightBookingSchema = new mongoose.Schema({
  flightId: {
    type: String,
    required: true,
  },
  flightName: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  price:
  {
    type: Number,
    required: true,
  },
 
});

export default mongoose.model("FlightBooking", FlightBookingSchema);
