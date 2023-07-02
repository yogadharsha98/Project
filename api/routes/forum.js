import express from "express";
import { createForum,updateForum,deleteForum,getForum,getForums } from "../controllers/forum.js";


const router = express.Router();

//CREATE
router.post("/",  createForum);

//UPDATE
router.put("/:id", updateForum);

//DELETE
router.delete("/:id", deleteForum);

//GET
router.get("/:id", getForum);

//GETALL
router.get("/", getForums);

export default router;
