import express from "express";
import { createRetreat,updateRetreat,deleteRetreat,getRetreat,getRetreats} from "../controllers/retreat.js";
import { verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createRetreat);

//UPDATE
router.put("/:id", verifyAdmin, updateRetreat);

//DELETE
router.delete("/:id", verifyAdmin, deleteRetreat);

//GET
router.get("/:id", getRetreat);

//GETALL
router.get("/", getRetreats);

export default router;
