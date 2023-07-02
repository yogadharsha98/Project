import express from "express";
import {
  createHotelBooking,
  updateHotelBooking,
  deleteHotelBooking,
  getHotelBooking,
  getHotelsBooking
} from "../controllers/hotelBooking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createHotelBooking);

//UPDATE
router.put("/:id", updateHotelBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotelBooking);

//GET
router.get("/:id", getHotelBooking);

//GETALL
router.get("/", getHotelsBooking);

export default router;
