import express from "express";
import {
  createFlightBooking,
  deleteFlightBooking,
  getFlightBooking,
  getFlightsBooking,
  updateFlightBooking,
} from "../controllers/flightBooking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createFlightBooking);

//UPDATE
router.put("/:id", updateFlightBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteFlightBooking);

//GET
router.get("/:id", getFlightBooking);

//GETALL
router.get("/", getFlightsBooking);

export default router;
