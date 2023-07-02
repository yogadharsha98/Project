import express from "express";
import { createComment,updateComment,deleteComment,getComment,getComments } from "../controllers/comment.js";


const router = express.Router();

//CREATE
router.post("/",  createComment);

//UPDATE
router.put("/:id", updateComment);

//DELETE
router.delete("/:id", deleteComment);

//GET
router.get("/:id", getComment);

//GETALL
router.get("/", getComments);

export default router;
