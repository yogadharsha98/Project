import mongoose from "mongoose";

const HotelBookingSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
  },
  roomIds: [{
    type: String,
    required: true,
  }],
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  dates: [{
    type: Date,
    required: true,
  }],
  maxPeople: {
    type: Number,
    
  },
  price:
  {
    type: Number,
    required: true,
  },
  
 
});

export default mongoose.model("HotelBooking", HotelBookingSchema);
