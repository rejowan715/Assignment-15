import express from "express";
import * as taskController from "../controllers/taskController.js";
const router = express.Router();

//showing "hello world"
router.get("/createGettask", taskController.createGettask);

//showing webtoken
router.get("/login", taskController.loginToken);

//showing "I am post body"
router.post("/createPosttask", taskController.createPosttask);



export default router;