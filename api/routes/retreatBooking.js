import express from "express";
import { createRetreatBooking,updateRetreatBooking,deleteRetreatBooking,getRetreatBooking,getRetreatsBooking} from "../controllers/retreatBooking.js";
import { verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", createRetreatBooking);

//UPDATE
router.put("/:id", verifyAdmin, updateRetreatBooking);

//DELETE
router.delete("/:id", verifyAdmin, deleteRetreatBooking);

//GET
router.get("/:id", getRetreatBooking);

//GETALL
router.get("/", getRetreatsBooking);

export default router;
