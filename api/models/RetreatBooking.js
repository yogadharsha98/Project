import mongoose from "mongoose";

const RetreatBookingSchema = new mongoose.Schema({
  retreatId: {
    type: String,
    required: true,
  },
  retreatTitle: {
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

export default mongoose.model("RetreatBooking", RetreatBookingSchema);
