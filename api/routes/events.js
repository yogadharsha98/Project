import express from "express";
import { createEvent, updateEvent,deleteEvent,getEvent,getEvents} from "../controllers/event.js";
import { verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/",  createEvent);

//UPDATE
router.put("/:id", verifyAdmin, updateEvent);

//DELETE
router.delete("/:id", verifyAdmin, deleteEvent);

//GET
router.get("/:id", getEvent);

//GETALL
router.get("/", getEvents);

export default router;
