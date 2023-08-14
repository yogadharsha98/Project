import mongoose from "mongoose";

const EventBookingSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  location: {
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
  price:
  {
    type: Number,
    required: true,
  },
 
});

export default mongoose.model("EventBooking", EventBookingSchema);
