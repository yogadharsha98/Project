import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import flightsRoute from "./routes/flights.js";
import flightsBookingRoute from "./routes/flightBooking.js";
import roomsRoute from "./routes/rooms.js";
import retreatRoute from './routes/retreats.js'
import retreatBookingRoute from './routes/retreatBooking.js'
import cookieParser from "cookie-parser";
import cors from "cors";
import hotelBookingRoute from './routes/hotelBooking.js'
import forumRoute from './routes/forum.js'
import eventRoute from './routes/events.js'
import commentRoute from './routes/comment.js'


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected!");
});



//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/hotelBooking", hotelBookingRoute);
app.use("/api/flights", flightsRoute);
app.use("/api/flightBooking", flightsBookingRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/retreat", retreatRoute);
app.use("/api/retreatBooking", retreatBookingRoute);
app.use("/api/forum", forumRoute);
app.use("/api/event", eventRoute);
app.use("/api/comment", commentRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});