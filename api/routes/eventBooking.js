import express from "express";
import { createEventBooking,updateEventBooking,deleteEventBooking,getEventBooking,getEventsBooking} from "../controllers/eventBooking.js";
import { verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", createEventBooking);

//UPDATE
router.put("/:id", verifyAdmin, updateEventBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteEventBooking);

//GET
router.get("/:id", getEventBooking);

//GETALL
router.get("/", getEventsBooking);

export default router;
