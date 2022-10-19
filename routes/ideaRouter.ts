import { getAllIdeas } from "../controllers/ideaController";
import express from "express";

const router = express.Router();

router.route("/").get(getAllIdeas);

export default router;